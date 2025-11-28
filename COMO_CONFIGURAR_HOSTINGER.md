# Como Configurar o Document Root no Hostinger

## O Problema

Seu site está em `/domains/fartech.app.br/public_html/` mas o servidor web está servindo a página padrão do Hostinger.

A solução é **apontar o Document Root para o diretório correto**.

## Passo a Passo Visual

### 1. Acesse o hPanel

1. Vá para: https://hpanel.hostinger.com
2. Faça login com suas credenciais

### 2. Navegue para Domains

No menu lateral esquerdo, clique em:
```
Domínios (ou Domains)
```

### 3. Procure pela Opção de Document Root

Você deve ver uma estrutura como a imagem anexada. Procure por uma destas opções:

**OPÇÃO A: Via "Site"**
1. No submenu de "Domínios", clique em **"Site"**
2. Procure por "Configurações" ou "Configurações Avançadas"
3. Procure o campo **"Raiz do Documento"** ou **"Document Root"**

**OPÇÃO B: Via "Avançado"**
1. No submenu, clique em **"Avançado"**
2. Procure pelo campo **"Document Root"** ou **"Raiz do Documento"**

**OPÇÃO C: Via "Plano de Hospedagem"**
1. Clique em **"Plano de hospedagem"** no menu lateral
2. Clique em **"Gerenciar"**
3. Procure por "Configurações Avançadas"
4. O Document Root deve estar lá

### 4. Configure o Document Root

Quando encontrar o campo, altere-o para:

```
/domains/fartech.app.br/public_html/
```

**OU** (dependendo do formato que aceita):

```
/domains/fartech.app.br/public_html
```

### 5. Salve as Alterações

Clique em "Salvar" ou "Confirmar"

### 6. Aguarde

Pode levar de 5 a 15 minutos para a mudança fazer efeito.

## Se Não Conseguir Encontrar

### Opção 1: Procure pela Lupa

1. Clique na **lupa** (Pesquisar) no topo do hPanel
2. Digite: `document root`
3. Procure pela opção que aparecer

### Opção 2: Contate o Suporte

1. No canto inferior direito, clique em **"Pergunte ao Kodee"** (chat de suporte)
2. Ou vá para: https://hostinger.com/support
3. Diga exatamente:

```
Olá, preciso configurar o Document Root do meu domínio fartech.app.br
para o caminho: /domains/fartech.app.br/public_html/

Meus arquivos estão nesse caminho mas o servidor está servindo 
uma página padrão. Como faço para apontar o document root corretamente?
```

## Verificar se Funcionou

Depois de salvar e aguardar 5-15 minutos, teste:

1. Abra seu navegador
2. Vá para: https://fartech.app.br
3. Você deve ver a página Fartech (com Infraestrutura de Dados, etc)
4. NÃO deve ver mais a página padrão do Hostinger

## Se Ainda Não Funcionar

Depois de tentar tudo acima:

1. Abra um ticket com o suporte Hostinger
2. Diga que os arquivos estão em `/domains/fartech.app.br/public_html/`
3. Peça para eles confirmarem qual é o document root configurado
4. Peça para alterarem para `/domains/fartech.app.br/public_html/`

---

**Importante**: O deploy automático já está configurado no GitHub para enviar arquivos para esse diretório. Depois que o Document Root estiver configurado, o site funcionará perfeitamente!

**Status**: ⏳ Aguardando configuração manual do Document Root no hPanel
