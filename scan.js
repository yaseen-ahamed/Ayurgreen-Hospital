import sharp from 'sharp';

async function findBounds() {
    const { data, info } = await sharp('Assets/Rehab Process.jpeg').raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;
    const rowSums = new Array(height).fill(0);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const i = (y * width + x) * 3;
            if (data[i] > 200 && data[i+1] > 200 && data[i+2] > 200) {
                rowSums[y]++;
            }
        }
    }
    
    let out = [];
    for(let y=0; y<height; y+=20) {
        let sum = 0;
        for(let j=0; j<20 && y+j<height; j++) sum += rowSums[y+j];
        out.push(`y=${y}: ${sum}`);
    }
    console.log(`Dimensions: ${width}x${height}`);
    console.log(out.join('\n'));
}
findBounds();
