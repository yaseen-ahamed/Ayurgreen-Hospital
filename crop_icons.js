import sharp from 'sharp';

async function extractIcons() {
    try {
        const { data, info } = await sharp('Assets/Rehab Process.jpeg').raw().toBuffer({ resolveWithObject: true });
        
        // Create new data array initialized to 0 (transparent black)
        const newData = Buffer.alloc(info.width * info.height * 4);
        
        for (let y = 0; y < info.height; y++) {
            for (let x = 0; x < info.width; x++) {
                const i3 = (y * info.width + x) * 3;
                const i4 = (y * info.width + x) * 4;
                
                // Crop vertically to the strip between y=601 and y=770
                // Crop horizontally to avoid edge triangles x >= 40 and x <= 1540
                if (y >= 601 && y <= 770) {
                   if (x >= 40 && x <= 1540) {
                       if (data[i3] > 200 && data[i3+1] > 200 && data[i3+2] > 200) {
                           newData[i4] = 255;     // R
                           newData[i4+1] = 255;   // G
                           newData[i4+2] = 255;   // B
                           newData[i4+3] = 255;   // A
                       }
                   }
                }
            }
        }
        
        await sharp(newData, { raw: { width: info.width, height: info.height, channels: 4 } })
            .trim()
            .webp({ quality: 100 })
            .toFile('Assets/Rehab Process Transparent.webp');
            
        console.log("Extraction complete!");
    } catch(err) {
        console.error(err);
    }
}
extractIcons();
