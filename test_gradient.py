import glob
import re

files = glob.glob('*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    # Check if this file has the condition card
    if '.ayur-condition-card {' in content or '.ayur-condition-card-title {' in content:
        # Replace background gradient
        content = re.sub(r'linear-gradient\(135deg, rgba\(0, 0, 0, 0\.2\) 0%, rgba\(0, 0, 0, 0\) 100%\)',
                         r'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)', content)
        
        # Replace title color
        content = re.sub(r'\.ayur-condition-card-title\s*\{[^}]*color:\s*#[0-9a-fA-F]+(\s*!important)?;', 
                         lambda m: m.group(0).replace(re.search(r'color:\s*#[0-9a-fA-F]+', m.group(0)).group(0), 'color: #ffffff'), content)
                         
        # Replace desc color
        content = re.sub(r'\.ayur-condition-card-desc\s*\{[^}]*color:\s*rgba\([0-9,\s]+\)(\s*!important)?;', 
                         lambda m: m.group(0).replace(re.search(r'color:\s*rgba\([0-9,\s]+\)', m.group(0)).group(0), 'color: rgba(255, 255, 255, 0.85)'), content)

        with open(f, 'w') as file:
            file.write(content)
