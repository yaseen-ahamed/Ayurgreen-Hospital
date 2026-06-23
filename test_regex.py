import re

content = """
            .ayur-condition-card-title {
                font-size: 18px;
                font-weight: 700;
                color: #ffffff !important;
                margin-bottom: 10px;
            }
"""
title_color = "#0c1938"
new_content = re.sub(r'(\.ayur-condition-card-title\s*\{[^}]*color:\s*)(#[0-9a-fA-F]+)(\s*!important)?;', fr'\g<1>{title_color}\g<3>;', content)
print(new_content)
