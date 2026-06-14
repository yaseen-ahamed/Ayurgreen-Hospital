const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf-8');

const oldCSS = `.story-card-bottom {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            width: 100%;
        }

        .story-card-info {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .story-card-name {
            color: #fff;
            font-family: var(--font-heading);
            font-size: 15px;
            font-weight: 600;
            line-height: 1.2;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
        }

        .story-card-diag {
            color: rgba(255, 255, 255, 0.75);
            font-size: 11px;
            font-weight: 400;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        .story-card-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
            margin-top: 4px;
        }

        .story-open-ig-btn {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 8px 12px;
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            border: none;
            border-radius: 30px;
            color: #fff !important;
            text-decoration: none;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(220, 39, 67, 0.3);
            white-space: nowrap;
        }

        .story-open-ig-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(220, 39, 67, 0.5);
            filter: brightness(1.1);
        }`;

const newCSS = `.story-card-bottom {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            width: 100%;
            padding-bottom: 20px;
        }

        .story-card-actions {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .story-open-ig-btn {
            width: 85%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 14px 16px;
            background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
            border: none;
            border-radius: 40px;
            color: #fff !important;
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(220, 39, 67, 0.4);
            white-space: nowrap;
        }

        .story-open-ig-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(220, 39, 67, 0.6);
            filter: brightness(1.1);
        }`;

// Replace ignoring strict spacing
const pattern = /\.story-card-bottom[\s\S]*?\.story-open-ig-btn:hover\s*{[^}]+}/;
content = content.replace(pattern, newCSS);

fs.writeFileSync('index.html', content, 'utf-8');
console.log('CSS updated successfully.');
