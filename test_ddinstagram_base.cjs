const https = require('https');

function testDDInstagramBase(shortcode) {
    const url = `https://ddinstagram.com/reel/${shortcode}/`;
    console.log("Checking ddinstagram.com URL:", url);
    
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    };
    
    https.get(url, options, (res) => {
        console.log("Status:", res.statusCode);
        console.log("Headers:", res.headers);
        if (res.headers.location) {
            console.log("Redirect location:", res.headers.location);
        }
    });
}

testDDInstagramBase("DUfjDAYAYyj");
