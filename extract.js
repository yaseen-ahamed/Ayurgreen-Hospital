import sharp from 'sharp';

async function processImage() {
    try {
        const image = sharp('Assets/Rehab Process.jpeg');
        const metadata = await image.metadata();
        const { width, height } = metadata;
        
        const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
        
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            
            if (r > 200 && g > 200 && b > 200) {
                data[i] = 255;
                data[i+1] = 255;
                data[i+2] = 255;
                data[i+3] = 255;
            } else {
                data[i+3] = 0;
            }
        }
        
        await sharp(data, { raw: { width, height, channels: 4 } })
            .trim()
            .webp({ quality: 100 })
            .toFile('Assets/Rehab Process Transparent.webp');
            
        console.log("Success with node");
    } catch(err) {
        console.error("Error", err);
    }
}
processImage();
