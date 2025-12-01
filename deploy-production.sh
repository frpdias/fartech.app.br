#!/bin/bash

# Script de deploy garantido para produção
# Faz build local e upload direto via FTP

set -e  # Para na primeira erro

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  🚀 DEPLOY GARANTIDO PARA PRODUÇÃO                        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# 1. Build
echo "📦 Fazendo build..."
npm run build
echo "✅ Build concluído!"
echo ""

# 2. Upload via FTP
echo "📤 Fazendo upload via FTP..."
python3 upload-all.py
echo ""

# 3. Verificação
echo "🔍 Verificando deploy..."
sleep 2

STATUS=$(curl -sI https://fartech.app.br/quem-somos | head -1 | grep -o "200" || echo "FALHOU")

if [ "$STATUS" = "200" ]; then
    echo "✅ Deploy verificado com sucesso!"
    echo "🌐 https://fartech.app.br/quem-somos está online!"
else
    echo "❌ Erro no deploy - página não está acessível"
    exit 1
fi

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  ✅ DEPLOY CONCLUÍDO E VERIFICADO                         ║"
echo "╚════════════════════════════════════════════════════════════╝"
