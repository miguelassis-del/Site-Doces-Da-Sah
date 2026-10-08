# Doces da Sah 🍓🎂

Site institucional / portfólio desenvolvido para a **Doces da Sah**, confeitaria artesanal de São Paulo – SP. O projeto apresenta as criações da doceria, conta a história da marca e facilita o contato com clientes por meio de pedidos via WhatsApp, iFood e 99.

## 🔗 Demo


## ✨ Funcionalidades

- **Hero de apresentação** com identidade visual da marca e chamada para encomenda
- **Galeria de criações** (bolos, doces para celebrar e encomendas especiais) com visualização ampliada das fotos em modal (`<dialog>`)
- **Seção "Nossa história"** contando a trajetória da confeitaria e do famoso Copo Bombom
- **Links de delivery** para iFood e 99
- **Formulário de encomenda** que encaminha a mensagem preenchida direto para o WhatsApp da loja
- **Botão flutuante de WhatsApp** disponível em toda a página
- **Seção de localização** com endereço e link para o Google Maps
- **Menu responsivo** com botão de alternância para dispositivos móveis
- **Acessibilidade**: link "pular para o conteúdo", `aria-labels`, `aria-live` no status do formulário e textos alternativos nas imagens
- **SEO básico**: `meta description`, `theme-color` e favicon em SVG inline
- Imagens otimizadas em formato **WebP** com `lazy loading`

## 🛠️ Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** (layout responsivo)
- **JavaScript** (menu mobile, modal de fotos, formulário integrado ao WhatsApp)

## 📁 Estrutura do projeto

```
Site-Doces-Da-Sah/
├── images/        # Logo e fotos (formato WebP)
├── index.html     # Página principal
├── script.js      # Interações (menu, modal, formulário)
├── style.css      # Estilos do site
├── LEIA-ME.txt    # Instruções adicionais
├── LICENSE        # Licença (Unlicense)
└── README.md
```

## 🚀 Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/miguelassis-del/Site-Doces-Da-Sah.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd Site-Doces-Da-Sah
   ```
3. Abra o `index.html` no navegador, ou use a extensão **Live Server** (VS Code) para recarregar automaticamente durante o desenvolvimento.

## ✏️ Como personalizar

- **Textos e seções:** edite o `index.html`
- **Cores e tipografia:** ajuste o `style.css`
- **Fotos:** substitua os arquivos na pasta `images/` mantendo os mesmos nomes (ou atualize os caminhos no HTML)
- **WhatsApp:** altere o número `5511988562421` nos links do `index.html` e no `script.js`
- **Delivery:** atualize os links do iFood e do 99 na seção "Peça por aqui"

## 🌐 Publicação

O site é estático, então pode ser hospedado gratuitamente em serviços como **GitHub Pages**, **Netlify** ou **Vercel**, sem necessidade de build.

## 📞 Contato da Doces da Sah

- 📍 Rua Auriverde, 763 – São Paulo, SP
- 📱 WhatsApp: (11) 98856-2421
- 📸 Instagram: [@doces_dasah](https://www.instagram.com/doces_dasah/)

## 👤 Desenvolvedor

Desenvolvido por [**miguelassis-del**](https://github.com/miguelassis-del).

## 📄 Licença

Este projeto está sob a licença [Unlicense](LICENSE).

> As imagens, o logotipo e a marca **Doces da Sah** pertencem ao seu respectivo proprietário.
