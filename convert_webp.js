import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = ['Assets', 'Assets/generated'];

async function convert() {
    for (let dir of dirs) {
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
        for (let file of files) {
            const inpath = path.join(dir, file);
            const outpath = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
            try {
                await sharp(inpath).webp({ quality: 80 }).toFile(outpath);
                console.log("Converted", outpath);
            } catch(e) {
                console.error("Failed to convert", file, e);
            }
        }
    }
}
convert();
