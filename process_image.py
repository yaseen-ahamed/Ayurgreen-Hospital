from PIL import Image
from collections import deque

def make_transparent_bg(image_path, output_path, tolerance=240):
    img = Image.open(image_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    # BFS from corners to find background pixels
    visited = set()
    queue = deque()
    
    # Start from corners
    corners = [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]
    for c in corners:
        queue.append(c)
        visited.add(c)
    
    while queue:
        x, y = queue.popleft()
        r, g, b, a = pixels[x, y]
        
        # If pixel is close to white, make it transparent and add neighbors
        if r > tolerance and g > tolerance and b > tolerance:
            pixels[x, y] = (r, g, b, 0)
            
            # Add neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    queue.append((nx, ny))

    # Save as webp
    img.save(output_path, "WEBP")
    print("Saved to", output_path)

make_transparent_bg('Assets/WhatsApp Image 2026-06-22 at 1.35.48 PM.jpeg', 'Assets/youtube.webp')
