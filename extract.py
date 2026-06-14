import cv2
import numpy as np
import sys

try:
    img = cv2.imread('Assets/Rehab Process.jpeg')
    if img is not None:
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        _, mask = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY)
        h, w = img.shape[:2]
        result = np.zeros((h, w, 4), dtype=np.uint8)
        result[mask == 255] = [255, 255, 255, 255]
        cv2.imwrite('Assets/Rehab Process Transparent.webp', result)
        print("Success OpenCV")
        sys.exit(0)
except Exception as e:
    pass

try:
    from PIL import Image
    img = Image.open('Assets/Rehab Process.jpeg').convert("RGBA")
    data = img.getdata()
    new_data = []
    for item in data:
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 255))
        else:
            new_data.append((255, 255, 255, 0))
    img.putdata(new_data)
    
    # Check bounds to trim if necessary
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save('Assets/Rehab Process Transparent.webp', 'WEBP')
    print("Success Pillow")
except Exception as e:
    print("Error:", e)
