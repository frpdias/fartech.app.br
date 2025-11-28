#!/usr/bin/env python3
import ftplib

FTP_HOST = "82.25.67.131"
FTP_USER = "u624120101"
FTP_PASS = "Atletico197744@"

ftp = ftplib.FTP()
ftp.connect(FTP_HOST, 21)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd('/public_html')

print("📋 Listando TODOS os arquivos (incluindo ocultos):\n")
files = []
ftp.retrlines('LIST -a', files.append)
for f in files:
    print(f)

ftp.quit()
