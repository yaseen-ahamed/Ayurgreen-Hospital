import re

with open('build_pages.py', 'r') as f:
    content = f.read()

# 1. Remove padding-left: 48px !important; from .ayur-hero-content
content = content.replace(
    'padding-left: 48px !important;',
    'padding-left: 0 !important;'
)
content = content.replace(
    'padding-left: 24px !important;',
    'padding-left: 0 !important;'
)

# 2. Fix the WhatsApp button HTML
# Currently it looks like:
# <span class="arrow-btn" style="background: transparent; color: #000000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center;">
#                                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/><path d="M16.5 16c-.5 1-1.5 1-2 1s-1.5-.5-3.5-2.5-2-3-2-3.5 0-1.5 1-2l1.5-1.5a1 1 0 0 1 1 0l2 4a1 1 0 0 1 0 1l-1.5 1.5c1 2 2.5 3.5 3.5 3.5l1.5-1.5a1 1 0 0 1 1 0l4 2a1 1 0 0 1 0 1z"/></svg>
#                                 </span>

# Wait, in ayurveda_main, the style was:
# style="background: transparent; color: #000; width: 16px; height: 16px; border-radius: 0; display: inline-flex; align-items: center; justify-content: center; padding: 0;"

filled_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>'

# Find all <span class="arrow-btn" style="..."> \n <svg ...> \n </span> and replace with clean one
content = re.sub(
    r'<span class="arrow-btn" style="background: transparent[^>]+>\s*<svg[^>]+>.*?</svg>\s*</span>',
    f'<span class="arrow-btn">{filled_svg}</span>',
    content,
    flags=re.DOTALL
)

with open('build_pages.py', 'w') as f:
    f.write(content)
