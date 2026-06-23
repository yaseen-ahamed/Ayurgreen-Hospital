import glob
import re

files = glob.glob('*.html') + glob.glob('dist/*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    if '.ayur-condition-card {' in content or '.ayur-condition-card-title {' in content:
        # Revert background
        content = content.replace('linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 100%)', 
                                  'linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0.15) 100%)')
        
        # Revert title
        content = re.sub(r'color:\s*#ffffff\s*!important;\s*margin-bottom:\s*10px;\s*text-shadow:\s*0\s*1px\s*3px\s*rgba\(0,0,0,0\.6\);',
                         'color: #0c1938 !important;\n                margin-bottom: 10px;', content)
        
        # Revert desc
        content = re.sub(r'color:\s*rgba\(255,\s*255,\s*255,\s*0\.9\)\s*!important;\s*text-shadow:\s*0\s*1px\s*3px\s*rgba\(0,0,0,0\.6\);',
                         'color: rgba(12, 25, 56, 0.85) !important;', content)

        with open(f, 'w') as file:
            file.write(content)
