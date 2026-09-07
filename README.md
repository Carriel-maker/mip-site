# MIP — versão pronta para GitHub Pages

Este pacote foi ajustado especificamente para hospedagem no **GitHub Pages**.

## O que foi alterado

- Todos os links internos e caminhos de imagens/arquivos usam caminhos **relativos** (`./...`), para funcionar tanto em `usuario.github.io` quanto em `usuario.github.io/nome-do-repositorio/`.
- Incluído arquivo `.nojekyll`, para o GitHub Pages servir o projeto estático exatamente como está.
- Incluída página `404.html`.
- Mantido o formulário de contato via **FormSubmit**, pois GitHub Pages não executa backend/PHP.
- O formulário continua enviando para `agencia@comc.online`.

## Estrutura

- `index.html` — Home
- `quem-somos.html` — Quem Somos
- `eixos.html` — Eixos de Atuação
- `monitoramento.html` — Monitoramento MIP
- `404.html` — Página de erro
- `assets/css/styles.css`
- `assets/js/site.js`
- `assets/img/`

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório. O `index.html` deve ficar na raiz.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/(root)`.
6. Salve.

O GitHub publicará o endereço do site após o deploy.

## Formulário de contato

O GitHub Pages é estático, então não processa formulários no servidor. O site usa FormSubmit:

`https://formsubmit.co/agencia@comc.online`

Na primeira submissão, o serviço pode pedir confirmação no e-mail de destino. Depois de ativado, as mensagens passam a ser encaminhadas normalmente.

## Redes sociais

Os links de LinkedIn e Instagram estão como placeholders (`#`). Substitua pelos endereços oficiais quando estiverem definidos.

## Domínio próprio

Se depois vocês usarem um domínio próprio, configure-o em **Settings → Pages → Custom domain**. Não é necessário alterar o código do site.
