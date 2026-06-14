from PIL import Image
import os

src = r"Assets/Therapies/Physiotherapy/IMG_3264.JPG"
dst = r"Assets/rehab/th_physiotherapy.webp"

if os.path.exists(src):
    img = Image.open(src)
    # Rotate 90 degrees clockwise
    img = img.transpose(Image.ROTATE_270)
    
    # Now crop to 4:3
    w, h = img.size
    target_aspect = 4 / 3
    current_aspect = w / h
    
    if current_aspect > target_aspect:
        # wider than target
        new_w = int(h * target_aspect)
        left = (w - new_w) // 2
        img = img.crop((left, 0, left + new_w, h))
    else:
        # taller than target
        new_h = int(w / target_aspect)
        top = int((h - new_h) * 0.35) # keep faces/action visible
        img = img.crop((0, top, w, top + new_h))
        
    img = img.convert("RGB")
    img.save(dst, "WEBP", quality=85)
    print(f"Successfully rotated and cropped {src} to {dst}")
else:
    print(f"Source file not found: {src}")
