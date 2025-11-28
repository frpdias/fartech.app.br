#!/usr/bin/env python3
import ftplib
import os
import sys

# Credenciais (você vai digitar a senha)
FTP_HOST = "82.25.67.131"
FTP_USER = "u624120101"
FTP_PASS = input("Digite a senha FTP: ")

print(f"\n🔌 Conectando em {FTP_HOST}...")

try:
    # Conecta via FTP
    ftp = ftplib.FTP()
    ftp.connect(FTP_HOST, 21)
    ftp.login(FTP_USER, FTP_PASS)
    
    print(f"✅ Conectado com sucesso!")
    print(f"📂 Diretório atual: {ftp.pwd()}")
    
    # Navega para public_html
    try:
        ftp.cwd('/public_html')
        print(f"📂 Mudou para: {ftp.pwd()}")
    except:
        print("⚠️ Não conseguiu acessar /public_html")
    
    # Lista arquivos
    print(f"\n📋 Arquivos em {ftp.pwd()}:")
    files = []
    ftp.retrlines('LIST', files.append)
    for f in files[:10]:  # Mostra primeiros 10
        print(f"  {f}")
    
    # Tenta enviar o index.html
    local_file = 'build/index.html'
    if os.path.exists(local_file):
        print(f"\n📤 Enviando {local_file}...")
        with open(local_file, 'rb') as f:
            ftp.storbinary(f'STOR index.html', f)
        print("✅ Arquivo enviado!")
    else:
        print(f"⚠️ Arquivo {local_file} não encontrado")
    
    ftp.quit()
    print("\n✅ Concluído!")
    
except Exception as e:
    print(f"\n❌ Erro: {e}")
    sys.exit(1)
