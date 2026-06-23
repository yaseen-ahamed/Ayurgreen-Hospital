import glob

files = glob.glob('*.html') + glob.glob('dist/*.html')
for f in files:
    with open(f, 'r') as file:
        content = file.read()
    
    if 'linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0.15) 100%)' in content:
        content = content.replace('linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0.15) 100%)', 
                                  'linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.3) 100%)')
        with open(f, 'w') as file:
            file.write(content)
