#!/bin/bash
# Deploy com versionamento de release e limpeza da raiz.
# Uso: ./deploy-release.sh [release-name]

set -euo pipefail

RELEASE_NAME="${1:-$(date +%Y%m%d-%H%M%S)}"
FTP_HOST="82.25.67.131"
FTP_USER="u624120101"
FTP_PASS="Atletico197744@"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BUILD_DIR="$SCRIPT_DIR/build"

if [ ! -d "$BUILD_DIR" ]; then
  echo "Erro: diretório build/ não encontrado. Rode 'npm run build' antes."
  exit 1
fi

echo "🛰️  Deployando release: $RELEASE_NAME"
echo "📁 Origem: $BUILD_DIR"

pushd "$BUILD_DIR" >/dev/null

LFTP_CMDS=$(cat <<EOF
set ftp:ssl-allow no
set ssl:verify-certificate no
set ftp:passive-mode on
open ftp://$FTP_HOST:21
user $FTP_USER $FTP_PASS
mkdir -p /public_html/releases
mkdir -p /public_html/releases/$RELEASE_NAME
mirror -R --delete --verbose . /public_html/releases/$RELEASE_NAME
mirror -R --delete --verbose --exclude-glob releases --exclude-glob releases/* . /public_html/
bye
EOF
)

lftp -e "$LFTP_CMDS"

popd >/dev/null

echo "✅ Release $RELEASE_NAME enviada para /public_html/releases e publicada em /public_html"
