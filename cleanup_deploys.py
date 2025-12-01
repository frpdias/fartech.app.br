#!/usr/bin/env python3
"""
Remove releases antigos no FTP, mantendo apenas os 3 mais recentes.

Pré-requisito: seus deploys precisam estar versionados em diretórios (ex.: /public_html/releases/20250122-1530).
Por segurança, o script só apaga diretórios dentro de RELEASES_DIR.
"""
import os
import ftplib
from typing import List, Tuple

# Configuração via ambiente, com fallback para valores do repo
FTP_HOST = os.getenv("FTP_HOST", "82.25.67.131")
FTP_USER = os.getenv("FTP_USER", "u624120101")
FTP_PASS = os.getenv("FTP_PASS", "Atletico197744@")

# Diretório que contém os releases versionados
RELEASES_DIR = os.getenv("RELEASES_DIR", "/public_html/releases")
# Quantidade de releases a manter
KEEP = int(os.getenv("KEEP_RELEASES", "3"))


def connect_ftp() -> ftplib.FTP:
    print(f"🔌 Conectando em {FTP_HOST} ...")
    ftp = ftplib.FTP()
    ftp.connect(FTP_HOST, 21)
    ftp.login(FTP_USER, FTP_PASS)
    print("✅ Conectado!\n")
    return ftp


def is_dir(entry: Tuple[str, dict]) -> bool:
    name, facts = entry
    return facts.get("type") == "dir"


def list_dirs_sorted(ftp: ftplib.FTP) -> List[Tuple[str, dict]]:
    """Lista dirs ordenados por data de modificação (mais recentes primeiro)."""
    entries = []
    try:
        for name, facts in ftp.mlsd():
            if is_dir((name, facts)):
                entries.append((name, facts))
    except ftplib.error_perm:
        # MLSD pode não estar disponível; fallback para NLST e sem ordenação
        names = ftp.nlst()
        entries = [(n, {}) for n in names if n not in (".", "..")]

    def sort_key(item: Tuple[str, dict]):
        _, facts = item
        return facts.get("modify", "")

    return sorted(entries, key=sort_key, reverse=True)


def rm_tree(ftp: ftplib.FTP, path: str):
    """Remove recursivamente um diretório no FTP."""
    try:
        ftp.cwd(path)
    except ftplib.error_perm as e:
        print(f"⚠️  Ignorando {path}: {e}")
        return

    items = []
    try:
        for name, facts in ftp.mlsd():
            items.append((name, facts))
    except ftplib.error_perm:
        items = [(n, {}) for n in ftp.nlst() if n not in (".", "..")]

    for name, facts in items:
        child = f"{path}/{name}"
        if facts.get("type") == "dir":
            rm_tree(ftp, child)
        else:
            try:
                ftp.delete(child)
                print(f"🗑️  {child}")
            except Exception as e:
                print(f"❌ Erro ao deletar {child}: {e}")

    ftp.cwd("..")
    try:
        ftp.rmd(path)
        print(f"🗑️  {path} (diretório removido)")
    except Exception as e:
        print(f"❌ Erro ao remover dir {path}: {e}")


def main():
    ftp = connect_ftp()

    # Garante que estamos no diretório de releases
    try:
        ftp.cwd(RELEASES_DIR)
    except ftplib.error_perm:
        print(f"❌ Diretório {RELEASES_DIR} não existe. Ajuste RELEASES_DIR e tente novamente.")
        ftp.quit()
        return

    releases = list_dirs_sorted(ftp)
    if not releases:
        print("ℹ️  Nenhum release encontrado para limpar.")
        ftp.quit()
        return

    print("📦 Releases encontrados (mais recentes primeiro):")
    for name, facts in releases:
        mod = facts.get("modify", "sem data")
        print(f"- {name} ({mod})")

    if len(releases) <= KEEP:
        print(f"✅ Apenas {len(releases)} release(s). Nada a remover (KEEP={KEEP}).")
        ftp.quit()
        return

    old = releases[KEEP:]
    print(f"\n🧹 Removendo {len(old)} release(s) antigos, mantendo {KEEP}:")
    for name, _ in old:
        target = f"{RELEASES_DIR.rstrip('/')}/{name}"
        rm_tree(ftp, target)

    ftp.quit()
    print("\n🎉 Limpeza concluída!")


if __name__ == "__main__":
    main()
