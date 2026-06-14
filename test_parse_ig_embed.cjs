const https = require('https');

function fetchEmbedHtml(url) {
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5'
        }
    };
    
    const embedUrl = url.endsWith('/') ? url + 'embed/' : url + '/embed/';
    console.log("Fetching embed page:", embedUrl);
    
    https.get(embedUrl, options, (res) => {
        console.log("Status code:", res.statusCode);
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            console.log("Response length:", data.length);
            
            // Search for video links in the page source
            const mp4Matches = [];
            const regex = /"video_url"\s*:\s*"([^"]+)"/g;
            let match;
            while ((match = regex.exec(data)) !== null) {
                mp4Matches.push(match[1]);
            }
            
            console.log("Found video_url fields count:", mp4Matches.length);
            if (mp4Matches.length > 0) {
                console.log("Sample video URL:", mp4Matches[0].replace(/\\u0026/g, '&'));
            }
            
            // Also search for standard video tags or sources in HTML
            const srcMatches = [];
            const srcRegex = /<video[^>]*src="([^"]+)"/gi;
            while ((match = srcRegex.exec(data)) !== null) {
                srcMatches.push(match[1]);
            }
            console.log("Found <video src=... tags count:", srcMatches.length);
            
            // Search for any other .mp4 files in script blocks
            const scriptRegex = /https:\/\/[^"'\\]+?\.mp4[^"'\\]*/g;
            const scriptsMatches = data.match(scriptRegex) || [];
            console.log("Found raw .mp4 urls count:", scriptsMatches.length);
            if (scriptsMatches.length > 0) {
                console.log("Sample raw .mp4 URL:", scriptsMatches[0].replace(/\\u0026/g, '&'));
            }
        });
    }).on('error', (e) => {
        console.error("Error fetching:", e);
    });
}

fetchEmbedHtml("https://www.instagram.com/reel/DUfjDAYAYyj/");
