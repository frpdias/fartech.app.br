#!/usr/bin/env python3
import ftplib
import os

FTP_HOST = "82.25.67.131"
FTP_USER = "u624120101"
FTP_PASS = "Atletico197744@"

print("🔌 Conectando em FTP...")
ftp = ftplib.FTP()
ftp.connect(FTP_HOST, 21)
ftp.login(FTP_USER, FTP_PASS)
ftp.cwd('/public_html')

print("✅ Conectado!\n")

def upload_file(local_path, remote_name):
    try:
        with open(local_path, 'rb') as f:
            ftp.storbinary(f'STOR {remote_name}', f)
        size = os.path.getsize(local_path)
        print(f"✅ {remote_name} ({size} bytes)")
        return True
    except Exception as e:
        print(f"❌ {remote_name}: {e}")
        return False

def upload_directory(local_dir, remote_dir=''):
    for item in os.listdir(local_dir):
        if item.startswith('.'):
            continue
            
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}" if remote_dir else item
        
        if os.path.isfile(local_path):
            upload_file(local_path, remote_path)
        elif os.path.isdir(local_path):
            # Cria diretório no servidor
            try:
                ftp.mkd(remote_path)
                print(f"📁 Criado: {remote_path}")
            except:
                pass  # Diretório já existe
            
            # Envia arquivos do subdiretório
            cwd_backup = ftp.pwd()
            ftp.cwd(remote_path)
            
            for subitem in os.listdir(local_path):
                if subitem.startswith('.'):
                    continue
                sublocal = os.path.join(local_path, subitem)
                if os.path.isfile(sublocal):
                    upload_file(sublocal, subitem)
            
            ftp.cwd(cwd_backup)

# Upload de todos os arquivos HTML da raiz
print("📤 Enviando arquivos HTML...")
html_files = ['index.html', 'blog.html', 'cases.html', 'clientes.html', 
              'contato.html', 'quem-somos.html', 'servicos.html']

for html in html_files:
    local = f'build/{html}'
    if os.path.exists(local):
        upload_file(local, html)

# Upload de diretórios
print("\n📤 Enviando diretório _app...")
if os.path.exists('build/_app'):
    upload_directory('build/_app', '_app')

print("\n📤 Enviando diretório images...")
if os.path.exists('build/images'):
    upload_directory('build/images', 'images')

print("\n📤 Enviando outros arquivos...")
for item in ['robots.txt', 'sitemap.xml', 'favicon.png']:
    local = f'build/{item}'
    if os.path.exists(local):
        upload_file(local, item)

ftp.quit()
print("\n🎉 Upload concluído!")
