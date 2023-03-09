# Meli Search (front end)

Este diretório faz parte do teste front-end desenvolvido para o Mercado Livre.

## 1 Sobre a aplicação

Esta aplicação contém 3 telas navegáveis:

### 1.1 Tela inicial com barra de pesquisa

- url da página:
  - [http://localhost:3000/](http://localhost:3000/)

### 1.2 Tela que apresenta resultados da pesquisa

- url da página:
  - [http://localhost:3000/items?search=:query](http://localhost:3000/items?search=:query)
- front consulta seguinte endpoint do back:
  - [http://localhost:8080/api/items?q=:query](http://localhost:8080/api/items?q=:query)
- back consulta seguintes endpoints na API:
  - [https://api.mercadolibre.com/sites/MLA/search?q=:query](https://api.mercadolibre.com/sites/MLA/search?q=:query)
- dados vindos do backend:

  ```
  {
    "author": { "name": String, “lastname”: String },
    "categories" :[String, String, String, ...],
    "items": [
      {
        "id": String,
        "title": String,
        "price": {
          "currency": String,
          "amount": Number,
          "decimals": "Number"
        },
        "picture": String,
        "condition": String,
        "free_shipping": Boolean,
        "state": String
      },
      {...},
      {...},
    ]
  }
  ```

- 🕵️ **Considerações em relação a especificação:**
  - foi adicionado o campo `state` para receber o estado (região) associado ao produto, poise era esperado que esta informação aparecesse na tela.

### 1.3 tela que apresenta os detalhes de um produto selecionado

- url da página:
  - [http://localhost:3000/items/:id](http://localhost:3000/items/:id)
- front consulta seguinte endpoint do back:
  - [http://localhost:8080/api/items/:id](http://localhost:8080/api/items/:id)
- back consulta seguintes endpoints na API:
  - [https://api.mercadolibre.com/items/:id](https://api.mercadolibre.com/items/:id)
  - [https://api.mercadolibre.com/items/:id/description](https://api.mercadolibre.com/items/:id/description)
- dados vindos do backend:

  ```
  {
    "author": { "name": String, “lastname”: String },
    "item": {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": "Number"
      },
      "picture": String,
      "condition": String,
      "free_shipping": Boolean,
      "sold_quantity": Number,
      "description": String,
    },
  }
  ```

- 🕵️ **Considerações em relação a especificação:**
  - o campo `decimals` recebe uma string contendo um número, como no objeto anteriror, não um número.
  - na especificação, essa página possui um **breadcrumb** abaixo do **header**. Porém, isoladamente essa página não tem acesso ao campo que contém essa informação (apenas a página de resultado de pesquisa). A solução proposta foi que esse valor seja passado na tela anterior quando o usuário clica em um produto da lista. A consequência disso é que se o usuário chegar na página de produto sem antes passar pela de resultados o breadcrumb não será renderizado.

## 2 Sobre as Tecnologias

### 2.1 Reactjs

O projeto foi desenvolvido em **javascript** usando [reactjs](https://reactjs.org/). Como react por padrão cria _Single Page Application_, foi usada a biblioteca [react-router-dom](https://reactrouter.com/en/main) que permite que a aplicação se comporte como uma _Multi Page Application_ e provê um contexto com diversas ferramentas para gerenciamento de rota.

Para executar requisições assíncronas ao backend, foi usado o **Fetch API** por já estar incluso nos navegadores, evitando a inserção de uma nova dependência.

### 2.2 Testes

Os testes foram executados usando [testing library](https://testing-library.com/docs/react-testing-library/intro/), que ja vem instalado quando uma aplicação react é criada usando [create-react-app](https://create-react-app.dev/) e facilita realizar testes que envolvam o DOM.

### 2.3 Estilo

A aplicação foi estilizada usando o preprocessador de estilo [sass](https://sass-lang.com/). Ele simplifica a estilização dos componentes e deixa o css menos verboso durante o desenvolvimento.

O processamento dos arquivos sass para arquivos css minificados ficou por conta do [gulp](https://gulpjs.com/). Para isso foi criado o arquivi `gulpfile.js` que usa as seguintes dependências: [gulp-sass](https://www.npmjs.com/package/gulp-sass), [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer), [gulp-clean-css](https://www.npmjs.com/package/gulp-clean) e [gulp-rename](https://www.npmjs.com/package/gulp-rename).

## 3 Sobre os elementos gráficos

A implementação do estilo das telas foi executado baseando-se nas imagens apresentadas no documento de especificação entregue.

Como as imagens oferecem limitações em relação a, por exemplo, um guia de estilo, foi utilizado como referência o estado atual do site [Mercado Libre Argentina](https://www.mercadolibre.com.ar/).

- ícone da marca usados no [header](https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.5/mercadolibre/logo__small.png) e [favicon](https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg)
- cor da marca, do botão e variações de cinza dos textos e fundo
- fonte (nesse caso, foi usado um fallback gratuito da fonte atual - [Roboto](https://fonts.google.com/specimen/Roboto))
- ícones (foram usados ícones do [Material Symbols](https://fonts.google.com/icons))

## Autoria

Laira Almas | [github](https://github.com/lairaalmas) | [github.io](https://lairaalmas.github.io/)
