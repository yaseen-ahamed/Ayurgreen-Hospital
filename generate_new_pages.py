import json
import os
import glob
from build_pages import therapies_list, departments_list, specializations_list, generate_json_ld

def get_parsed_data():
    with open("parsed_services.json", "r") as f:
        return json.load(f)

parsed_data = get_parsed_data()

# Helper to find matching parsed data
def find_data(name):
    # Try exact match
    if name in parsed_data:
        return parsed_data[name]
    
    # Try substring match
    for k in parsed_data.keys():
        if name.lower() in k.lower() or k.lower() in name.lower():
            return parsed_data[k]
    
    # Return empty template if not found
    return {
        "intro": [],
        "importance": [],
        "approach": [],
        "treatments": [],
        "benefits": [],
        "why_choose": [],
        "closing": []
    }

def format_paragraphs(lines):
    if not lines:
        return ""
    html = ""
    in_list = False
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if line.startswith('*'):
            if not in_list:
                html += '<ul class="ayur-list">\n'
                in_list = True
            text = line[1:].strip()
            # if there is a colon, make the first part bold
            if ':' in text:
                parts = text.split(':', 1)
                html += f'    <li><strong>{parts[0]}:</strong>{parts[1]}</li>\n'
            else:
                html += f'    <li>{text}</li>\n'
        else:
            if in_list:
                html += '</ul>\n'
                in_list = False
            html += f'<p>{line}</p>\n'
    if in_list:
        html += '</ul>\n'
    return html

def parse_treatments(lines):
    # Extract treatments as a list of dicts with title and desc
    treatments = []
    for line in lines:
        line = line.strip()
        if line.startswith('*'):
            text = line[1:].strip()
            if ':' in text:
                parts = text.split(':', 1)
                treatments.append({"title": parts[0].strip(), "desc": parts[1].strip()})
            else:
                treatments.append({"title": text, "desc": ""})
    return treatments

def generate_service_html(svc, category_name, siblings):
    name = svc["name"]
    filename = svc["filename"]
    banner_img = svc.get("banner_img", "Assets/Hospital View.webp")
    intro_img = svc.get("intro_img", "Assets/Hospital View.webp")
    
    data = find_data(name)
    
    # Fallbacks if data is empty
    intro_html = format_paragraphs(data["intro"] or [f"At Ayurgreen Hospital, our {name} department is dedicated to providing comprehensive care. With over 25 years of expertise in neuro and orthopedic rehabilitation, we blend advanced medical protocols with traditional wisdom to ensure complete recovery."])
    importance_html = format_paragraphs(data["importance"] or data["approach"] or [f"{name} plays a powerful role in treatment for neurological disorders, especially when combined with advanced rehabilitation techniques.", "* Comprehensive evaluations", "* Tailored treatment plans", "* Continuous monitoring"])
    
    treatments = parse_treatments(data["treatments"])
    if not treatments:
        treatments = [
            {"title": "Initial Assessment", "desc": "A comprehensive evaluation to understand the baseline condition and design a personalized protocol."},
            {"title": "Targeted Therapies", "desc": "Evidence-based treatments designed to maximize functional recovery and systemic rejuvenation."},
            {"title": "Progressive Rehabilitation", "desc": "Continuous adjustments to the therapy regimen based on real-time functional gains and recovery milestones."}
        ]
        
    treatments_html = ""
    for idx, treat in enumerate(treatments):
        num = f"{(idx+1):02d}"
        
        # Give some varied images for treatments if not specified
        t_img = "Assets/rehab/th_panchakarma.webp"
        if idx % 3 == 1:
            t_img = "Assets/rehab/th_physiotherapy.webp"
        elif idx % 3 == 2:
            t_img = "Assets/rehab/th_robotic.webp"
            
        treatments_html += f"""
                        <div class="ayur-therapy-card">
                            <img src="{t_img}" alt="{treat["title"]}" class="ayur-therapy-card-img">
                            <div class="ayur-therapy-card-body">
                                <div class="ayur-therapy-num">{num}</div>
                                <div class="ayur-therapy-name">{treat["title"]}</div>
                                <div class="ayur-therapy-desc">{treat["desc"]}</div>
                            </div>
                        </div>"""
    
    # Build Sidebar links
    sidebar_items_html = ""
    for sib in siblings:
        active_class = "active" if sib["filename"] == filename else ""
        sidebar_items_html += f"""
                <a href="{sib["filename"]}" class="ayur-qdept-link {active_class}"><i data-lucide="{sib["icon"]}" size="14" style="color: {sib["color"]};"></i>{sib["name"]}</a>"""

    main_html = f"""    <main class="ayur-page-main">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

            .ayur-page-main {{
                --primary-green: #2BC46D;
                --dark-navy: #020C22;
                --pure-white: #FFFFFF;
                --body-text: #667085;
                --heading: #101828;
                --border: #EAECF0;
                
                font-family: 'Inter', sans-serif;
                color: var(--body-text);
                background-color: var(--pure-white);
                line-height: 1.7;
            }}

            .ayur-page-main h1, 
            .ayur-page-main h2, 
            .ayur-page-main h3, 
            .ayur-page-main h4 {{
                font-family: 'Plus Jakarta Sans', sans-serif;
                color: var(--heading);
                letter-spacing: -0.02em;
            }}
            
            .ayur-banner-container {{
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                box-sizing: border-box;
                width: 100%;
            }}

            .ayur-container {{
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 24px;
                box-sizing: border-box;
                width: 100%;
            }}

            /* HERO BANNER SECTION */
            .ayur-hero {{
                position: relative;
                width: 100%;
                height: 480px;
                background-color: var(--dark-navy);
                overflow: hidden;
                display: flex;
                align-items: center;
            }}
            .ayur-hero-bg {{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0.35;
                z-index: 1;
            }}
            .ayur-hero-overlay {{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, rgba(2, 12, 34, 0.95) 0%, rgba(2, 12, 34, 0.8) 50%, rgba(2, 12, 34, 0.2) 100%);
                z-index: 2;
            }}
            .ayur-hero-content-wrapper {{
                position: relative;
                z-index: 3;
                width: 100%;
            }}
            .ayur-hero-badge {{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(43, 196, 109, 0.15);
                border: 1px solid rgba(43, 196, 109, 0.3);
                padding: 8px 16px;
                border-radius: 100px;
                color: #4CAF50;
                font-size: 13.5px;
                font-weight: 600;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                margin-bottom: 24px;
            }}
            .ayur-hero-title {{
                font-size: 56px;
                font-weight: 800;
                color: #ffffff;
                line-height: 1.1;
                margin-bottom: 24px;
                max-width: 700px;
            }}
            .ayur-hero-desc {{
                font-size: 18px;
                color: rgba(255, 255, 255, 0.85);
                max-width: 600px;
                line-height: 1.6;
            }}
            @media (max-width: 768px) {{
                .ayur-hero {{ height: 420px; }}
                .ayur-hero-title {{ font-size: 36px; }}
                .ayur-hero-desc {{ font-size: 16px; }}
            }}
            
            /* PAGE BODY — full width, same 16px outer gutter as banner wrapper */
            .ayur-page-body {{
                width: 100%;
                padding: 0 16px 80px 16px;
                display: grid;
                grid-template-columns: 280px 1fr;
                gap: 24px;
                align-items: start;
                box-sizing: border-box;
                background: #ffffff;
            }}
            @media (max-width: 1024px) {{
                .ayur-page-body {{ grid-template-columns: 240px 1fr; }}
            }}
            @media (max-width: 768px) {{
                .ayur-page-body {{ grid-template-columns: 1fr; padding: 0 12px 80px; }}
            }}

            /* SIDEBAR */
            .ayur-qdept-sidebar {{
                position: sticky;
                top: 96px;
                background: rgba(0, 0, 0, 0.8) !important;
                backdrop-filter: blur(16px) !important;
                -webkit-backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
                border-radius: 32px !important;
                padding: 20px !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 4px !important;
                max-height: 80vh;
                overflow-y: auto;
                margin-top: 24px;
                box-shadow: none !important;
            }}
            .ayur-qdept-sidebar::-webkit-scrollbar {{ width: 3px; }}
            .ayur-qdept-sidebar::-webkit-scrollbar-thumb {{ background: rgba(255,255,255,0.15); border-radius: 2px; }}
            .ayur-qdept-title {{
                font-family: 'Inter', sans-serif;
                font-size: 10.5px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.18em;
                color: rgba(255,255,255,0.4);
                padding: 2px 14px 10px;
                margin-bottom: 4px;
                border-bottom: 1px solid rgba(255,255,255,0.08);
            }}
            .ayur-qdept-link {{
                display: flex !important;
                align-items: center !important;
                gap: 12px !important;
                color: rgba(255, 255, 255, 0.85) !important;
                text-decoration: none !important;
                padding: 7px 14px !important;
                font-size: 13.5px !important;
                font-weight: 500 !important;
                border-radius: 40px !important;
                transition: all 0.25s ease !important;
                border: 1px solid transparent !important;
                background: transparent !important;
                font-family: 'Inter', sans-serif !important;
                white-space: nowrap !important;
            }}
            .ayur-qdept-link:hover,
            .ayur-qdept-link.active {{
                background: rgba(255, 255, 255, 0.15) !important;
                border-color: rgba(255, 255, 255, 0.25) !important;
                color: #fff !important;
            }}
            .ayur-qdept-link svg {{
                width: 28px !important;
                height: 28px !important;
                padding: 7px !important;
                background: transparent !important;
                border-radius: 50% !important;
                box-sizing: border-box !important;
                transition: all 0.25s ease !important;
                flex-shrink: 0 !important;
            }}
            .ayur-qdept-link:hover svg,
            .ayur-qdept-link.active svg {{
                background: #ffffff !important;
                padding: 6px !important;
            }}
            @media (max-width: 768px) {{
                .ayur-qdept-sidebar {{
                    position: relative !important;
                    top: 0 !important;
                    display: flex !important;
                    flex-direction: row !important;
                    flex-wrap: wrap !important;
                    max-height: none !important;
                    border-radius: 24px !important;
                    margin-top: 16px;
                }}
                .ayur-qdept-title {{ width: 100%; }}
                .ayur-qdept-link {{ font-size: 12.5px !important; }}
            }}

            /* CONTENT COLUMN */
            .ayur-content-col {{
                display: flex;
                flex-direction: column;
                gap: 0;
                padding-top: 24px;
            }}
            
            /* SECTIONS & TYPOGRAPHY */
            .ayur-section {{
                padding: 48px;
                border: 1px solid var(--border);
                border-radius: 36px;
                margin-bottom: 24px;
                background-color: var(--pure-white);
            }}
            .ayur-section.dark-bg {{
                background-color: var(--dark-navy);
                border-color: var(--dark-navy);
                color: #ffffff;
            }}
            @media (max-width: 768px) {{
                .ayur-section {{ padding: 32px 24px; border-radius: 28px; }}
            }}
            .ayur-sec-label {{
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.15em;
                color: var(--primary-green);
                display: inline-block;
                margin-bottom: 12px;
            }}
            .ayur-sec-title {{
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 32px;
                color: var(--heading);
                line-height: 1.25;
            }}
            .ayur-section.dark-bg .ayur-sec-title {{
                color: #ffffff;
            }}
            @media (max-width: 768px) {{
                .ayur-sec-title {{ font-size: 26px; margin-bottom: 24px; }}
            }}
            
            .ayur-sec-body p {{
                font-size: 16px;
                line-height: 1.7;
                color: var(--body-text);
                margin-bottom: 20px;
            }}
            .ayur-section.dark-bg .ayur-sec-body p {{
                color: rgba(255, 255, 255, 0.8);
            }}
            
            .ayur-intro-grid {{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                align-items: center;
            }}
            @media (max-width: 992px) {{
                .ayur-intro-grid {{ grid-template-columns: 1fr; gap: 24px; }}
            }}
            .ayur-intro-grid-img {{
                width: 100%;
                height: auto;
                border-radius: 24px;
                object-fit: cover;
                max-height: 380px;
                border: 1px solid var(--border);
            }}

            /* LISTS */
            .ayur-list {{
                list-style: none;
                padding: 0;
                margin: 0 0 24px 0;
            }}
            .ayur-list li {{
                position: relative;
                padding-left: 32px;
                margin-bottom: 16px;
                font-size: 16px;
                color: var(--heading);
                font-weight: 500;
            }}
            .ayur-list li::before {{
                content: '';
                position: absolute;
                left: 0;
                top: 6px;
                width: 18px;
                height: 18px;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%232BC46D' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/%3E%3Cpolyline points='22 4 12 14.01 9 11.01'/%3E%3C/svg%3E");
                background-size: contain;
                background-repeat: no-repeat;
            }}
            
            /* THERAPY CARDS */
            .ayur-therapy-grid {{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-top: 32px;
            }}
            @media (max-width: 768px) {{
                .ayur-therapy-grid {{ grid-template-columns: 1fr; }}
            }}
            .ayur-therapy-card {{
                display: flex;
                flex-direction: column;
                background: #F8FAFC;
                border-radius: 24px;
                border: 1px solid var(--border);
                overflow: hidden;
                transition: all 0.3s ease;
            }}
            .ayur-therapy-card:hover {{
                transform: translateY(-4px);
                box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
                border-color: rgba(43, 196, 109, 0.3);
            }}
            .ayur-therapy-card-img {{
                width: 100%;
                height: 180px;
                object-fit: cover;
            }}
            .ayur-therapy-card-body {{
                padding: 24px;
                flex: 1;
                display: flex;
                flex-direction: column;
            }}
            .ayur-therapy-num {{
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 32px;
                font-weight: 800;
                color: rgba(43, 196, 109, 0.15);
                line-height: 1;
                margin-bottom: 12px;
            }}
            .ayur-therapy-name {{
                font-size: 17px;
                font-weight: 700;
                color: var(--heading);
                margin-bottom: 8px;
            }}
            .ayur-therapy-desc {{
                font-size: 14.5px;
                color: var(--body-text);
                line-height: 1.6;
            }}
            
            /* INTEGRATION PILLS */
            .ayur-integration-pills {{
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                margin-top: 32px;
            }}
            .ayur-pill {{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 10px 18px;
                border-radius: 100px;
                color: #ffffff;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.3s ease;
            }}
            .ayur-pill:hover {{
                background: rgba(43, 196, 109, 0.2);
                border-color: #2BC46D;
            }}

            /* STICKY BOTTOM CTA */
            .ayur-sticky-bottom-cta {{
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border-top: 1px solid var(--border);
                padding: 12px 16px;
                box-sizing: border-box;
                z-index: 100;
                display: none;
                box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.05);
            }}
            @media (max-width: 768px) {{
                .ayur-sticky-bottom-cta {{ display: block; }}
            }}
            .ayur-sticky-bottom-cta-grid {{
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 8px;
                max-width: 600px;
                margin: 0 auto;
            }}
            .ayur-bottom-cta-btn {{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 4px;
                text-decoration: none;
                color: var(--heading);
                font-size: 11px;
                font-weight: 600;
                padding: 8px 4px;
                border-radius: 12px;
                background: #F8FAFC;
                border: 1px solid var(--border);
            }}
            .ayur-bottom-cta-btn.primary {{
                background: var(--primary-green);
                border-color: var(--primary-green);
                color: #ffffff;
            }}
            
            .mobile-sidebar-toggle {{
                display: none;
                width: 100%;
                padding: 14px 20px;
                background: var(--dark-navy);
                color: #fff;
                border: none;
                border-radius: 16px;
                font-family: 'Inter', sans-serif;
                font-size: 15px;
                font-weight: 600;
                align-items: center;
                justify-content: center;
                gap: 10px;
                cursor: pointer;
            }}
            @media (max-width: 768px) {{
                .mobile-sidebar-toggle {{ display: flex; }}
                .ayur-qdept-sidebar {{
                    position: fixed !important;
                    bottom: -100% !important;
                    left: 0 !important;
                    width: 100% !important;
                    z-index: 1000 !important;
                    background: var(--dark-navy) !important;
                    border-radius: 24px 24px 0 0 !important;
                    transition: bottom 0.3s ease-in-out !important;
                    margin: 0 !important;
                    padding: 32px 24px !important;
                    box-sizing: border-box !important;
                    max-height: 85vh !important;
                }}
                .ayur-qdept-sidebar.open {{ bottom: 0 !important; }}
                .sidebar-overlay {{
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.5);
                    z-index: 999;
                    display: none;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }}
                .sidebar-overlay.open {{ display: block; opacity: 1; }}
            }}
        </style>
        
        <section class="ayur-hero">
            <img src="{banner_img}" alt="{name} Banner" class="ayur-hero-bg">
            <div class="ayur-hero-overlay"></div>
            <div class="ayur-banner-container">
                <div class="ayur-hero-content-wrapper">
                    <div class="ayur-hero-badge"><i data-lucide="shield-check" size="16"></i> {category_name}</div>
                    <h1 class="ayur-hero-title">{name}</h1>
                    <p class="ayur-hero-desc">Experience clinical care and integrated rehabilitation customized specifically for your recovery journey.</p>
                </div>
            </div>
        </section>

        <!-- Mobile Sidebar Toggle -->
        <div class="ayur-container" style="margin-top: 24px; margin-bottom: 0;">
            <button class="mobile-sidebar-toggle" onclick="document.querySelector('.ayur-qdept-sidebar').classList.add('open'); document.querySelector('.sidebar-overlay').classList.add('open');">
                <i data-lucide="menu" size="18"></i>
                <span>Explore {category_name}</span>
            </button>
        </div>
        
        <div class="sidebar-overlay" onclick="document.querySelector('.ayur-qdept-sidebar').classList.remove('open'); this.classList.remove('open');"></div>
        
        <div class="ayur-container ayur-sidebar-container" style="padding: 40px 24px 80px 24px; box-sizing: border-box; width: 100%;">
            <div class="ayur-page-body">
                <!-- QUICK ACCESS SIDEBAR -->
                <aside class="ayur-qdept-sidebar">
                    <div class="ayur-qdept-title">{category_name}</div>
                    {sidebar_items_html}
                </aside>
                
                <!-- CONTENT SECTIONS -->
                <div class="ayur-content-col">
                    <div class="ayur-section">
                        <span class="ayur-sec-label">The Legacy</span>
                        <h2 class="ayur-sec-title">{name} at Ayurgreen Hospital</h2>
                        <div class="ayur-intro-grid">
                            <div class="ayur-sec-body">
                                {intro_html}
                            </div>
                            <img src="{intro_img}" alt="{name} treatment at Ayurgreen Hospital" class="ayur-intro-grid-img">
                        </div>
                    </div>

                    <!-- 2. Neurological Recovery -->
                    <div class="ayur-section">
                        <span class="ayur-sec-label">Clinical Focus</span>
                        <h2 class="ayur-sec-title">How {name} Supports Recovery</h2>
                        <div class="ayur-intro-grid">
                            <img src="{banner_img}" alt="{name} support at Ayurgreen Hospital" class="ayur-intro-grid-img" style="order: -1;">
                            <div>
                                <div class="ayur-sec-body">
                                    {importance_html}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. Key Therapies -->
                    <div class="ayur-section">
                        <span class="ayur-sec-label">Therapy Modules</span>
                        <h2 class="ayur-sec-title">Key {name} Therapies Offered</h2>
                        <div class="ayur-sec-body">
                            <p>Ayurgreen Hospital provides a range of specialized treatments tailored to each patient's condition and recovery stage:</p>
                        </div>
                        <div class="ayur-therapy-grid">
                            {treatments_html}
                        </div>
                    </div>

                    <!-- 4. Integration with Modern Rehab (dark bg) -->
                    <div class="ayur-section dark-bg">
                        <span class="ayur-sec-label">Integrated Innovation</span>
                        <h2 class="ayur-sec-title">Integration with Modern Rehabilitation</h2>
                        <div class="ayur-sec-body">
                            {format_paragraphs(data["why_choose"] or data["closing"] or ["What makes Ayurgreen unique is its seamless integration of advanced rehabilitation technologies. Patients benefit from a multidisciplinary approach that combines:"])}
                        </div>
                        <div class="ayur-integration-pills">
                            <span class="ayur-pill"><i data-lucide="bot" size="14"></i>Robotic Neuro Rehabilitation</span>
                            <span class="ayur-pill"><i data-lucide="dumbbell" size="14"></i>Physiotherapy &amp; Occupational Therapy</span>
                            <span class="ayur-pill"><i data-lucide="message-circle" size="14"></i>Speech &amp; Swallow Therapy</span>
                            <span class="ayur-pill"><i data-lucide="heart-handshake" size="14"></i>Psychological Counseling</span>
                            <span class="ayur-pill"><i data-lucide="headset" size="14"></i>VR Cognitive Rehabilitation</span>
                            <span class="ayur-pill"><i data-lucide="sun" size="14"></i>Yoga &amp; Meditation</span>
                        </div>
                        <div class="ayur-sec-body" style="margin-top: 24px;">
                            <p>This combination ensures that {name} enhances — not replaces — modern treatment, creating a comprehensive recovery plan. The result is faster progress, improved functional outcomes, and better quality of life.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Sticky Bottom CTA for Mobile -->
        <div class="ayur-sticky-bottom-cta">
            <div class="ayur-sticky-bottom-cta-grid">
                <a href="tel:+918080808080" class="ayur-bottom-cta-btn">
                    <i data-lucide="phone" size="18"></i>
                    <span>Call Us</span>
                </a>
                <a href="https://wa.me/918080808080" target="_blank" class="ayur-bottom-cta-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color: #25D366; display: inline-block; vertical-align: middle;"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.41 1.451 5.4 0 9.794-4.393 9.798-9.799.002-2.618-1.017-5.08-2.868-6.93C17.078 2.026 14.615.82 12.006.818c-5.4 0-9.794 4.393-9.799 9.799-.001 2.1.543 4.146 1.573 5.956L2.78 21.612l5.05-1.326c-.347-.207-.756-.309-1.183-.311zm12.516-7.411c-.303-.151-1.793-.884-2.071-.985-.278-.101-.482-.151-.684.151-.202.303-.783.985-.96 1.186-.177.202-.354.228-.657.076-.303-.151-1.279-.471-2.436-1.503-.9-.802-1.507-1.793-1.684-2.096-.177-.303-.019-.467.133-.618.136-.135.303-.354.455-.53.151-.177.202-.303.303-.505.101-.202.051-.379-.025-.53-.076-.151-.684-1.648-.938-2.261-.247-.595-.499-.513-.684-.522-.177-.008-.379-.01-.58-.01-.202 0-.53.076-.808.379-.278.303-1.062 1.037-1.062 2.529 0 1.491 1.087 2.932 1.239 3.134.151.202 2.14 3.267 5.184 4.578.724.312 1.29.499 1.732.639.728.231 1.39.198 1.916.12.585-.088 1.793-.733 2.046-1.44.253-.707.253-1.314.177-1.44-.076-.126-.278-.202-.58-.353z"/></svg>
                    <span>WhatsApp</span>
                </a>
                <a href="index.html#consultation" class="ayur-bottom-cta-btn primary">
                    <i data-lucide="calendar" size="18"></i>
                    <span>Book Now</span>
                </a>
            </div>
        </div>
    </main>
    """
    return main_html

def replace_main(filename, new_main_html):
    filepath = os.path.join(os.getcwd(), filename)
    if not os.path.exists(filepath):
        return
        
    with open(filepath, 'r', encoding="utf-8") as f:
        content = f.read()

    svc = None
    category_name = "Therapies"
    siblings = therapies_list
    
    for s in therapies_list:
        if s['filename'] == filename:
            svc = s
            break
            
    if not svc:
        for s in departments_list:
            if s['filename'] == filename:
                svc = s
                category_name = "Departments"
                siblings = departments_list
                break
                
    if not svc:
        for s in specializations_list:
            if s['filename'] == filename:
                svc = s
                category_name = "Specializations"
                siblings = specializations_list
                break

    start_idx = content.find('<main')
    end_idx = content.find('</main>') + len('</main>')
    
    if start_idx != -1 and end_idx != -1:
        new_content = content[:start_idx] + new_main_html + content[end_idx:]
        
        # Strip the homepage hero-canvas-wrapper banner and keep only the header navigation!
        header_start = new_content.find('<header class="hero-header">')
        if header_start != -1:
            header_end = new_content.find('</header>', header_start) + len('</header>')
            header_html = new_content[header_start:header_end]
            
            wrapper_start = new_content.find('<section class="hero-canvas-wrapper"')
            main_start = new_content.find('<main')
            
            if wrapper_start != -1 and main_start != -1:
                wrapper_end = new_content.rfind('</section>', 0, main_start) + len('</section>')
                
                # Keep transparent homepage header directly without any wrapper div or background style overrides
                new_content = new_content[:wrapper_start] + header_html + new_content[wrapper_end:]
                
        # Page-specific head and SEO updates
        if svc:
            name = svc['name']
            desc = svc.get('desc', f"Experience clinical care and integrated rehabilitation for {name} at Ayurgreen Hospital. Combining advanced technology and traditional Ayurveda.")
            
            # Replace title
            title_start = new_content.find('<title>')
            title_end = new_content.find('</title>')
            if title_start != -1 and title_end != -1:
                new_content = new_content[:title_start] + f'<title>{name} Rehabilitation & Care | Ayurgreen Hospital</title>' + new_content[title_end + len('</title>'):]
                
            # Replace description
            desc_start = new_content.find('<meta name="description"')
            if desc_start != -1:
                desc_end = new_content.find('>', desc_start) + 1
                new_content = new_content[:desc_start] + f'<meta name="description" content="{desc}">' + new_content[desc_end:]
                
            # Inject unified JSON-LD schema
            schema_start = new_content.find('<script type="application/ld+json">')
            if schema_start != -1:
                schema_end = new_content.find('</script>', schema_start) + len('</script>')
                json_ld_schema = generate_json_ld(filename, name, desc, category_name)
                new_content = new_content[:schema_start] + '<script type="application/ld+json">\\n' + json_ld_schema + '\\n</script>' + new_content[schema_end:]

        with open(filepath, 'w', encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {filename}")

if __name__ == "__main__":
    all_services = therapies_list + departments_list + specializations_list
    for svc in all_services:
        filename = svc["filename"]
        if os.path.exists(filename):
            category_name = "Therapies"
            siblings = therapies_list
            if svc in departments_list:
                category_name = "Departments"
                siblings = departments_list
            elif svc in specializations_list:
                category_name = "Specializations"
                siblings = specializations_list
            
            new_main_html = generate_service_html(svc, category_name, siblings)
            replace_main(filename, new_main_html)
