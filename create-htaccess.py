#!/usr/bin/env python3
import ftplib

FTP_HOST = "82.25.67.131"
FTP_USER = "u624120101"
FTP_PASS = "Atletico197744@"

# Conteúdo do .htaccess
htaccess_content = """DirectoryIndex index.html index.php
RewriteEngine On
RewriteBase /

# Força usar index.html como página inicial
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^$ /index.html [L]
"""

print("🔌 Conectando...")
ftp = ftplib.FTP()
ftp.connect(FTP_HOST, 21)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd('/public_html')

# Upload do .htaccess
print("📤 Criando .htaccess...")
from io import BytesIO
ftp.storbinary('STOR .htaccess', BytesIO(htaccess_content.encode('utf-8')))

print("✅ .htaccess criado!")
ftp.quit()
