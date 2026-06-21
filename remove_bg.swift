import Foundation
import AppKit
import Vision

guard CommandLine.arguments.count == 3 else {
    print("Usage: swift remove_bg.swift <input.png> <output.png>")
    exit(1)
}

let inputPath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]

guard let image = NSImage(contentsOfFile: inputPath),
      let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    print("Failed to load image")
    exit(1)
}

if #available(macOS 14.0, *) {
    let request = VNGenerateForegroundInstanceMaskRequest()
    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])

    do {
        try handler.perform([request])
        guard let result = request.results?.first else {
            print("No foreground mask found")
            exit(1)
        }

        let maskPixelBuffer = try result.generateMaskedImage(
            ofInstances: result.allInstances,
            from: handler,
            croppedToInstancesExtent: false
        )

        let ciImage = CIImage(cvPixelBuffer: maskPixelBuffer)
        let context = CIContext()
        guard let outputCGImage = context.createCGImage(ciImage, from: ciImage.extent) else {
            print("Failed to create output CGImage")
            exit(1)
        }

        let outputNSImage = NSImage(cgImage: outputCGImage, size: image.size)
        guard let tiffData = outputNSImage.tiffRepresentation,
              let bitmapImage = NSBitmapImageRep(data: tiffData),
              let pngData = bitmapImage.representation(using: .png, properties: [:]) else {
            print("Failed to convert to PNG")
            exit(1)
        }

        try pngData.write(to: URL(fileURLWithPath: outputPath))
        print("Success")

    } catch {
        print("Error: \(error)")
        exit(1)
    }
} else {
    print("Requires macOS 14.0+")
    exit(1)
}
