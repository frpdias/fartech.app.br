#!/usr/bin/env python3
"""
Generate a premium dashboard card image for Fartech website
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_dashboard_card():
    """Create a professional dashboard card"""
    
    # Image dimensions
    width, height = 1200, 800
    
    # Create image with dark background
    img = Image.new('RGB', (width, height), color='#0a0e27')
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Draw gradient background effect
    for i in range(150):
        alpha = int(8 * (1 - i/150))
        y_offset = int(height * i / 150)
        draw.rectangle([(0, y_offset), (width, y_offset + 6)],
                      fill=(0, 102, 255, alpha))
    
    # Load fonts (with fallback)
    try:
        title_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 22)
        header_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 18)
        normal_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 14)
        tiny_font = ImageFont.truetype("/Library/Fonts/Arial.ttf", 10)
    except:
        title_font = ImageFont.load_default()
        header_font = title_font
        normal_font = title_font
        tiny_font = title_font
    
    # Header section
    draw.rectangle([(30, 30), (1170, 150)],
                   outline=(0, 153, 255), width=2, fill=(26, 58, 92, 180))
    
    # Header text
    draw.text((50, 40), 'BEM-VINDO DE VOLTA', font=tiny_font, fill=(102, 204, 255, 255))
    draw.text((50, 60), 'Fernando Roberto Pereira Dias', font=title_font, fill=(255, 255, 255, 255))
    draw.text((50, 85), 'frpdias@hotmail.com', font=normal_font, fill=(170, 187, 204, 255))
    
    # Status pill
    draw.rectangle([(1000, 50), (1080, 85)],
                   outline=(0, 204, 102), width=2, fill=(0, 61, 26, 100))
    draw.text((1010, 58), 'ATIVO', font=normal_font, fill=(0, 255, 153, 255))
    
    # Approval percentage
    draw.text((1100, 50), '45.12%', font=header_font, fill=(0, 255, 255, 255))
    draw.text((1100, 75), 'APROVEITAMENTO', font=tiny_font, fill=(102, 187, 255, 255))
    
    # Main content card
    draw.rectangle([(30, 170), (1170, 780)],
                   outline=(0, 68, 102), width=2, fill=(10, 26, 46, 150))
    
    # Content title
    draw.text((50, 190), 'Seu aproveitamento', font=title_font, fill=(255, 255, 255, 255))
    draw.text((50, 215), 'Acompanhe seu progresso e desempenho', 
              font=normal_font, fill=(136, 136, 136, 255))
    
    # Chart bars
    chart_data = [28, 55, 32, 31, 52, 0]
    chart_labels = ['Mercado\nFinanceiro', 'Etica e\nCompliance', 'Produtos',
                    'Analise\nPlanejamento', 'Sistema\nFinanceiro', 'Perfil']
    
    bar_x_start = 70
    bar_space = 165
    bar_width = 50
    bar_max_height = 250
    base_y = 650
    
    for i, (value, label) in enumerate(zip(chart_data, chart_labels)):
        x = bar_x_start + i * bar_space
        
        # Bar background
        draw.rectangle([(x, base_y - bar_max_height), (x + bar_width, base_y)],
                      outline=(0, 68, 102), width=1, fill=(26, 58, 92, 100))
        
        # Bar fill with gradient (red to orange)
        if value > 0:
            h = int(bar_max_height * value / 100)
            r = 255
            g = int(165 * value / 100)
            b = 0
            draw.rectangle([(x, base_y - h), (x + bar_width, base_y)],
                          fill=(r, g, b, 220))
            
            # Value label
            val_text = f'{value}%'
            draw.text((x + bar_width//2 - 8, base_y - h - 25),
                     val_text, font=tiny_font, fill=(255, 255, 255, 255))
        
        # Category label - NO ANCHOR (simple positioning)
        label_lines = label.split('\n')
        label_y = base_y + 20
        for line in label_lines:
            draw.text((x - 5, label_y), line, font=tiny_font, fill=(170, 187, 204, 255))
            label_y += 14
    
    # Statistics sidebar
    stats_x = 950
    stats_y = 200
    
    draw.text((stats_x, stats_y), 'ESTATISTICAS', font=header_font, fill=(0, 255, 204, 255))
    
    # Stat boxes
    stats_data = [
        ('246', 'Total de\nQuestoes', (0, 255, 255)),
        ('111', 'Respostas\nCertas', (0, 255, 153)),
        ('135', 'Respostas\nErradas', (255, 136, 68)),
        ('0:22', 'Tempo Medio', (255, 187, 102))
    ]
    
    stat_box_x = stats_x
    stat_box_y = stats_y + 50
    stat_box_w = 190
    stat_box_h = 70
    
    for value, label, color in stats_data:
        # Draw stat box
        draw.rectangle([(stat_box_x - 90, stat_box_y), (stat_box_x + 100, stat_box_y + stat_box_h)],
                      outline=(0, 51, 102), width=1, fill=(10, 26, 46, 100))
        
        # Draw stat value
        draw.text((stat_box_x - 60, stat_box_y + 10), value, 
                 font=header_font, fill=color + (255,))
        
        # Draw stat label
        label_lines = label.split('\n')
        label_y = stat_box_y + 40
        for line in label_lines:
            draw.text((stat_box_x - 60, label_y), line, 
                     font=tiny_font, fill=(102, 102, 102, 255))
            label_y += 12
        
        stat_box_y += 90
    
    # Save image
    os.makedirs('static/images', exist_ok=True)
    output_path = 'static/images/dashboard-card.png'
    img.save(output_path)
    print(f"✅ Dashboard card created successfully: {output_path}")
    print(f"   Dimensions: {width}x{height}px")
    
    return output_path

if __name__ == '__main__':
    create_dashboard_card()
