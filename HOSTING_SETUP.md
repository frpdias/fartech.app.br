# Configuração de Hosting Fartech

## Status Atual

✅ **Site construído**: SvelteKit com Vite  
✅ **Deploy automático**: GitHub Actions configurado  
✅ **Arquivos no FTP**: Enviados para `/domains/fartech.app.br/public_html/`  
✅ **DNS**: Propagado e HTTPS funcionando  
❌ **Problema**: Servidor web serve página padrão do Hostinger

## Problema Identificado

A Hostinger tem uma **arquitetura de duplo servidor**:
- **FTP Server**: `82.25.67.131` (armazena arquivos)
- **Web Server**: `89.116.213.110` (serve o site)

Os arquivos estão sendo enviados para o FTP correto, mas o **web server não está apontando para o documento raiz correto**.

## Solução Necessária

### Via Hostinger hPanel (RECOMENDADO)

1. Acesse https://hpanel.hostinger.com
2. Vá para **Domains** → **fartech.app.br**
3. Clique em **Manage** ou **Settings**
4. Procure por **Document Root** ou **Web Root**
5. Configure para: `/domains/fartech.app.br/public_html/`
6. Salve as alterações
7. Aguarde ~5 minutos para propagação

### Via Suporte Hostinger

Se não encontrar a opção acima:

1. Abra um ticket de suporte: https://hostinger.com/support
2. Diga exatamente:
   ```
   Preciso configurar o document root do meu domínio fartech.app.br.
   Os arquivos estão no FTP em /domains/fartech.app.br/public_html/ 
   mas o servidor web está servindo uma página padrão.
   Qual é o caminho correto do document root?
   ```

## Estrutura de Arquivos no Hostinger

```
/domains/
  └── fartech.app.br/
      └── public_html/          ← AQUI estão os arquivos do site
          ├── index.html        ✅ Presente
          ├── .htaccess         ✅ Presente
          ├── _app/             ✅ Presente
          ├── images/           ✅ Presente
          └── [outros arquivos]
```

## Deploy Automático

O GitHub Actions está configurado para:
- Fazer build do site com `npm run build`
- Enviar arquivos via FTP para `/domains/fartech.app.br/public_html/`
- Atualizar automaticamente a cada push para `main`

**Workflow**: `.github/workflows/deploy.yml`

## Próximos Passos

1. ☐ Configurar o document root no hPanel
2. ☐ Esperar ~5 minutos pela propagação
3. ☐ Testar: `curl https://fartech.app.br`
4. ☐ Confirmar que vê o site (não a página padrão)

## URLs Importantes

- **Site**: https://fartech.app.br
- **Repositório**: https://github.com/frpdias/fartech.app.br
- **hPanel**: https://hpanel.hostinger.com
- **Suporte**: https://hostinger.com/support

## Tecnologias

- **Framework**: SvelteKit
- **Build Tool**: Vite 6.4.1
- **Adapter**: @sveltejs/adapter-static
- **CI/CD**: GitHub Actions
- **Hosting**: Hostinger (FTP)
- **Domínio**: fartech.app.br (Registro.br → Hostinger DNS)

## Contatos

- **Hostinger FTP**: 82.25.67.131 (port 21)
- **Usuário**: u624120101
- **Email registrado**: [seu email]

---

**Última atualização**: Nov 28, 2025  
**Status**: Aguardando configuração do document root
