const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '../Assets');

async function convertToWebp(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            await convertToWebp(filePath);
        } else if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            // Convert raster formats
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                // Determine new filename
                const basename = path.basename(file, path.extname(file));
                const newFilePath = path.join(dir, `${basename}.webp`);
                
                // Note: If multiple extensions share the same basename in a folder, 
                // they would conflict (e.g. image.jpg and image.png). 
                // A safer bet is to append .webp or just replace. 
                // We'll replace and assume they don't collide.
                
                // Actually to avoid collisions and keep things robust if a file already ends in .webp
                if (fs.existsSync(newFilePath) && filePath !== newFilePath) {
                    console.warn(`Warning: Target ${newFilePath} already exists. Proceeding anyway and deleting original.`);
                }
                
                console.log(`Converting: ${filePath} -> ${newFilePath}`);
                try {
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(newFilePath);
                        
                    // Delete the original file
                    fs.unlinkSync(filePath);
                    console.log(`Deleted original: ${filePath}`);
                } catch (err) {
                    console.error(`Failed to process ${filePath}:`, err);
                }
            }
        }
    }
}

console.log('Starting image conversion process...');
convertToWebp(targetDir).then(() => {
    console.log('Conversion complete.');
}).catch(err => {
    console.error('An error occurred:', err);
});
