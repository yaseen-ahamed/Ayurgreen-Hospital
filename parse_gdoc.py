import json
import re

def parse_gdoc(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # The doc has services separated by blank lines and then a main title.
    # Let's split by double newlines or similar, but looking at the file it seems it has 
    # Title on one line, then a Subtitle on the next line.
    
    # We can split by looking for the known titles or just heuristically.
    # Let's find all the sections by looking for "The Importance of...", "Ayurgreen’s Approach:", etc.
    
    services = {}
    current_service = None
    
    lines = content.split('\n')
    
    current_data = {}
    current_section = "intro"
    
    for i, line in enumerate(lines):
        line = line.strip()
        if not line:
            continue
            
        # Heuristic for a new service: A short line that doesn't end with punctuation and doesn't start with '*'
        if len(line) < 40 and not line.endswith(('.', ':', '?')) and not line.startswith('*') and "The Importance" not in line and "Approach" not in line and "Treatments" not in line and "Benefit" not in line and "Why Choose" not in line and i > 0 and not lines[i-1].strip():
            # Looks like a new title
            if current_service:
                services[current_service] = current_data
                
            current_service = line
            current_data = {
                "intro": [],
                "importance": [],
                "approach": [],
                "treatments": [],
                "benefits": [],
                "why_choose": [],
                "closing": []
            }
            current_section = "intro"
            continue
            
        if current_service is None:
            # Maybe the first line is a title
            if i == 0:
                current_service = line
                current_data = {
                    "intro": [],
                    "importance": [],
                    "approach": [],
                    "treatments": [],
                    "benefits": [],
                    "why_choose": [],
                    "closing": []
                }
                current_section = "intro"
                continue
            else:
                continue

        if "The Importance of" in line:
            current_section = "importance"
            current_data["importance"].append(line)
            continue
        elif "Approach:" in line or "Approach" in line and "Ayurgreen" in line:
            current_section = "approach"
            current_data["approach"].append(line)
            continue
        elif "Treatments and Services" in line or "Therapies Offered" in line or "Key Therapies" in line or "Services We Provide" in line or "Specialized Treatments" in line or "Treatment Protocols" in line or "Treatments We Offer" in line or "Assistive Devices and Services" in line or "Specialized Services" in line or "Rehabilitation Interventions" in line:
            current_section = "treatments"
            current_data["treatments"].append(line)
            continue
        elif "Who Can Benefit" in line:
            current_section = "benefits"
            current_data["benefits"].append(line)
            continue
        elif "Why Choose Ayurgreen" in line:
            current_section = "why_choose"
            current_data["why_choose"].append(line)
            continue
        elif current_section == "why_choose" and len(line) < 100 and not line.startswith('*'):
            # Probably closing
            current_section = "closing"
            current_data["closing"].append(line)
            continue
            
        current_data[current_section].append(line)

    if current_service:
        services[current_service] = current_data
        
    return services

if __name__ == "__main__":
    import sys
    res = parse_gdoc(sys.argv[1])
    for k, v in res.items():
        print(f"--- {k} ---")
        for sec, lines in v.items():
            print(f"  {sec}: {len(lines)} lines")
    
    with open("parsed_services.json", "w") as f:
        json.dump(res, f, indent=2)
