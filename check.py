content = open('index.html', encoding='utf-8').read()
checks = [
    'Assets/rehab/prog_stroke.webp',
    'Assets/rehab/prog_sciatica.webp',
    'Assets/rehab/th_cycle.webp',
    'Assets/rehab/th_vr.webp',
    'btn-prev-therapies',
    'clip-therapies',
]
for c in checks:
    print(('OK' if c in content else 'MISSING') + ': ' + c)
print(str(content.count('id="tab-content-programs"')) + 'x tab-content-programs')
print(str(content.count('id="tab-content-therapies"')) + 'x tab-content-therapies')
