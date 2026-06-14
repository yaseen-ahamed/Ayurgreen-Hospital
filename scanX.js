import sharp from 'sharp';

async function scanX() {
    const { data, info } = await sharp('Assets/Rehab Process.jpeg').raw().toBuffer({ resolveWithObject: true });
    
    let colSums = new Array(info.width).fill(0);
    let rowSums = new Array(info.height).fill(0);
    for (let y = 580; y < 820; y++) {
        for(let x=0; x < info.width; x++) {
             let i = (y * info.width + x)*3;
             if(data[i]>200 && data[i+1]>200 && data[i+2]>200) {
                 colSums[x]++;
                 rowSums[y]++;
             }
        }
    }
    
    let summaryX = [];
    for(let x=0; x<info.width; x+=20) {
        let sum = 0;
        for(let j=0; j<20 && x+j<info.width; j++) sum += colSums[x+j];
        summaryX.push(`x=${x}:${sum}`);
    }
    
    let summaryY = [];
    for(let y=580; y<820; y+=10) {
        let sum = 0;
        for(let j=0; j<10 && y+j<info.height; j++) sum += rowSums[y+j];
        summaryY.push(`y=${y}:${sum}`);
    }
    
    console.log("X:", summaryX.join(' '));
    console.log("Y:", summaryY.join(' '));
}
scanX();
