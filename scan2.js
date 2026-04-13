import sharp from 'sharp';

async function scanBands() {
    const { data, info } = await sharp('Assets/Rehab Process.jpeg').raw().toBuffer({ resolveWithObject: true });
    const { width, height } = info;

    const bands = [
        { y_start: 30, y_end: 150 },
        { y_start: 300, y_end: 420 },
        { y_start: 420, y_end: 540 },
        { y_start: 600, y_end: 780 },
        { y_start: 840, y_end: 1130 }
    ];

    for (let band of bands) {
        let colSums = new Array(width).fill(0);
        for (let y = band.y_start; y < band.y_end; y++) {
            for (let x = 0; x < width; x++) {
                const i = (y * width + x) * 3;
                if (data[i] > 200 && data[i+1] > 200 && data[i+2] > 200) {
                    colSums[x]++;
                }
            }
        }
        
        let peaks = 0;
        let inPeak = false;
        let gap = 0;
        for (let x = 0; x < width; x++) {
             if (colSums[x] > 5) {
                 if (!inPeak) { peaks++; inPeak = true; }
                 gap = 0;
             } else {
                 gap++;
                 if(gap > 10) { inPeak = false; }
             }
        }
        console.log(`Band y=${band.y_start}-${band.y_end}: ${peaks} peaks horizontal blobs`);
    }
}
scanBands();
