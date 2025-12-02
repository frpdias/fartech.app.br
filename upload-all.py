#!/usr/bin/env python3
import ftplib
import os
import sys

FTP_HOST = "82.25.67.131"
FTP_USER = "u624120101"
FTP_PASS = "Atletico197744@"
# Domínio agora usa doc root dedicado em /domains/fartech.app.br/public_html
FTP_REMOTE_ROOT = os.getenv("FTP_REMOTE_ROOT", "/domains/fartech.app.br/public_html")

print("🔌 Conectando em FTP...")
ftp = ftplib.FTP()
ftp.connect(FTP_HOST, 21)
ftp.login(FTP_USER, FTP_PASS)

def ensure_remote_path(path: str) -> str:
    """Garante que um caminho (absoluto ou relativo) existe e retorna o path final."""
    cwd_backup = ftp.pwd()
    base = "/" if path.startswith("/") else cwd_backup
    ftp.cwd(base)
    parts = [p for p in path.split("/") if p]
    for part in parts:
        try:
            ftp.cwd(part)
        except Exception:
            ftp.mkd(part)
            ftp.cwd(part)
    final = ftp.pwd()
    ftp.cwd(cwd_backup)
    return final

try:
    remote_root = ensure_remote_path(FTP_REMOTE_ROOT)
    ftp.cwd(remote_root)
except ftplib.error_perm as e:
    print(f"❌ Não foi possível criar/acessar {FTP_REMOTE_ROOT}: {e}")
    print("Crie a pasta manualmente no painel (domains/fartech.app.br/public_html) ou ajuste FTP_REMOTE_ROOT.")
    sys.exit(1)

print("✅ Conectado!")
print(f"📂 Usando diretório remoto: {remote_root}\n")

def upload_file(local_path: str, remote_path: str):
    """Envia um arquivo único para o caminho remoto informado."""
    try:
        with open(local_path, "rb") as f:
            ftp.storbinary(f"STOR {remote_path}", f)
        size = os.path.getsize(local_path)
        print(f"✅ {remote_path} ({size} bytes)")
        return True
    except Exception as e:
        print(f"❌ {remote_path}: {e}")
        return False


def ensure_remote_subdir(remote_dir: str):
    """Garante que o diretório remoto (relativo ao cwd atual) existe."""
    if not remote_dir:
        return
    cwd_backup = ftp.pwd()
    for part in remote_dir.split("/"):
        if not part:
            continue
        try:
            ftp.mkd(part)
        except Exception:
            pass  # já existe
        ftp.cwd(part)
    ftp.cwd(cwd_backup)


def upload_directory_recursive(local_root: str, remote_root: str = ""):
    """Replica a árvore de diretórios de forma recursiva."""
    for current, dirs, files in os.walk(local_root):
        # ignora ocultos
        dirs[:] = [d for d in dirs if not d.startswith(".")]
        files = [f for f in files if not f.startswith(".")]

        rel = os.path.relpath(current, local_root)
        remote_dir = remote_root if rel == "." else f"{remote_root}/{rel}".strip("/")
        ensure_remote_subdir(remote_dir)

        for file in files:
            local_path = os.path.join(current, file)
            remote_path = f"{remote_dir}/{file}" if remote_dir else file
            upload_file(local_path, remote_path)

# Upload de todos os arquivos HTML da raiz
print("📤 Enviando arquivos HTML...")
html_files = ['index.html', 'blog.html', 'cases.html', 'clientes.html', 
              'contato.html', 'quem-somos.html', 'servicos.html']

for html in html_files:
    local = f'build/{html}'
    if os.path.exists(local):
        upload_file(local, html)

# Upload de diretórios (recursivo para levar assets versionados)
print("\n📤 Enviando diretório _app...")
if os.path.exists("build/_app"):
    upload_directory_recursive("build/_app", "_app")

print("\n📤 Enviando diretório images...")
if os.path.exists("build/images"):
    upload_directory_recursive("build/images", "images")

print("\n📤 Enviando outros arquivos...")
for item in ["robots.txt", "sitemap.xml", "favicon.png", ".htaccess"]:
    local = f"build/{item}"
    if os.path.exists(local):
        upload_file(local, item)

ftp.quit()
print("\n🎉 Upload concluído!")
