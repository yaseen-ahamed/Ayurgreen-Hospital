import glob
import re

files = glob.glob('*.html') + glob.glob('dist/*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # We will replace everything from `.ayur-btn-primary, .ayur-btn-glass {` to the end of the image block.
    # Let's find the block using regex.
    pattern = r'\.ayur-btn-primary,\s*\.ayur-btn-glass\s*\{.*?\.ayur-btn-primary\s*img,\s*\.ayur-btn-glass\s*img\s*\{[^\}]+\}'
    
    css_replacement = """            .ayur-btn-primary, .ayur-btn-glass { 
                display: inline-flex; 
                align-items: center; 
                gap: 12px; 
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 100%) !important;
                border: 1px solid rgba(255, 255, 255, 0.3) !important;
                border-top: 1px solid rgba(255, 255, 255, 0.5) !important;
                border-left: 1px solid rgba(255, 255, 255, 0.5) !important;
                color: #ffffff !important; 
                padding: 14px 28px; 
                border-radius: 40px; 
                font-weight: 700; 
                font-size: 15px; 
                text-transform: capitalize;
                letter-spacing: 0;
                text-decoration: none; 
                transition: all 0.3s ease; 
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15), inset 0 2px 4px 0 rgba(255, 255, 255, 0.3) !important;
                backdrop-filter: blur(16px) saturate(120%);
                -webkit-backdrop-filter: blur(16px) saturate(120%);
            }
            .ayur-btn-primary:hover, .ayur-btn-glass:hover { 
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%) !important; 
                border-color: rgba(255, 255, 255, 0.5) !important; 
                transform: translateY(-3px); 
                box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.2), inset 0 2px 6px 0 rgba(255, 255, 255, 0.4) !important; 
            }
            .ayur-btn-primary svg, .ayur-btn-glass svg {
                background-color: transparent !important;
                color: #ffffff !important;
                width: 24px !important;
                height: 24px !important;
                padding: 0 !important;
                border-radius: 0 !important;
                transition: transform 0.3s ease;
            }
            .ayur-btn-primary img, .ayur-btn-glass img {
                background-color: transparent !important;
                width: 24px !important;
                height: 24px !important;
                padding: 0 !important;
                border-radius: 0 !important;
                margin-left: 0 !important;
                transform: none !important;
                object-fit: contain;
                filter: brightness(0) invert(1) !important;
                transition: transform 0.3s ease;
            }
            .ayur-btn-primary:hover svg, .ayur-btn-glass:hover svg,
            .ayur-btn-primary:hover img, .ayur-btn-glass:hover img {
                transform: scale(1.1) !important;
            }"""
            
    content = re.sub(pattern, css_replacement, content, flags=re.DOTALL)
    
    with open(f, 'w') as file:
        file.write(content)
