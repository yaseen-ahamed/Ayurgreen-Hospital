import glob
import re

files = glob.glob('*.html') + glob.glob('dist/*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    if '.ayur-condition-card {' in content or '.ayur-condition-card-title {' in content:
        # Fix gradient if we want to ensure readability on the right
        content = content.replace('linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', 
                                  'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 100%)')
        
        # Add text-shadow to title
        if 'text-shadow' not in content.split('.ayur-condition-card-title {')[1].split('}')[0]:
             content = re.sub(r'(\.ayur-condition-card-title\s*\{[^}]*)(margin-bottom:\s*10px;)', r'\1\2 text-shadow: 0 1px 3px rgba(0,0,0,0.6);', content)

        # Fix desc color and add text-shadow
        content = re.sub(r'(\.ayur-condition-card-desc\s*\{[^}]*)color:\s*rgba\([0-9,\s\.]+\)(\s*!important)?;', 
                         r'\1color: rgba(255, 255, 255, 0.9) !important; text-shadow: 0 1px 3px rgba(0,0,0,0.6);', content)

        with open(f, 'w') as file:
            file.write(content)
