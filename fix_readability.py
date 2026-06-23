import glob
import re

def get_luminance(hex_color):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 3:
        hex_color = ''.join([c*2 for c in hex_color])
    r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b

files = glob.glob('*.html') + glob.glob('dist/*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    if '.ayur-condition-card {' in content:
        # Extract base color
        match = re.search(r'linear-gradient\([^)]+\),\s*(#[A-Fa-f0-9]{3,6})', content)
        if match:
            base_color = match.group(1)
            lum = get_luminance(base_color)
            
            is_dark = lum < 130
            
            title_color = '#ffffff' if is_dark else '#0c1938'
            desc_color = 'rgba(255, 255, 255, 0.9)' if is_dark else 'rgba(12, 25, 56, 0.85)'
            
            # Replace title color
            content = re.sub(r'(\.ayur-condition-card-title\s*\{[^}]*color:\s*)(#[0-9a-fA-F]+)(\s*!important)?;', 
                             fr'\g<1>{title_color}\g<3>;', content)
                             
            # Replace desc color
            content = re.sub(r'(\.ayur-condition-card-desc\s*\{[^}]*color:\s*)(rgba\([0-9,\s\.]+\))(\s*!important)?;', 
                             fr'\g<1>{desc_color}\g<3>;', content)

            with open(f, 'w') as file:
                file.write(content)
