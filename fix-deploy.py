#!/usr/bin/env python3
import ftplib

FTP_HOST = "82.25.67.131"
FTP_USER = "u624120101"
FTP_PASS = "Atletico197744@"

print("🔌 Conectando...")
ftp = ftplib.FTP()
ftp.connect(FTP_HOST, 21)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd('/public_html')

# Remove o arquivo de state para forçar sync completo
try:
    ftp.delete('.ftp-deploy-sync-state.json')
    print("✅ Arquivo de state deletado - próximo deploy será completo")
except:
    print("⚠️ Arquivo de state não encontrado (ok)")

ftp.quit()
print("✅ Concluído!")
