# Teste Prático Front-end do Mercado Livre

Este teste front-end desenvolvido para o Mercado Livre apresenta uma aplicação contendo 3 telas navegaveis:

- tela inicial com barra de pesquisa
- tela que apresenta resultados da pesquisa
- tela que apresenta os detalhes de um produto selecionado

E um servidor back-end que conecta o front-end com a [API do Mercado Livre](api.mercadolibre.com/).

## Tecnologias utilizadas

Front-end

- html
- css + [sass](https://sass-lang.com/) + [gulp](https://gulpjs.com/)
- [reactjs](https://reactjs.org/) + [react-router-dom](https://reactrouter.com/en/main)
- fetch api

Back-end

- [node](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [axios](https://axios-http.com/)

## Como executar a aplicação

### Este repositório contém dois diretórios na raiz:

- **frontend**: código da aplicação front-end react
- **backend**: código que conecta o front-end à API do Mercado livre.

```
├── backend
│   ├── __tests__/...
│   ├── items/...
│   ├── app.js
│   ├── server.js
│   ├── jest.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
|
└── frontend
|   ├── public/...
|   ├── src
|   |   ├── assets/...
|   |   ├── components/...
|   |   ├── pages/...
|   |   ├── styles/...
|   |   ├── utils/...
|   |   ├── App.js
|   |   ├── index.js
|   |   └── setupTests.js
|   |
|   ├── gulpfile.js
|   ├── package.json
|   ├── package-lock.json
|   └── README.md
|
├── manual.txt
└── README.md


```

### Antes de executar a aplicação você deve:

- executar `npm install` dentro dos diretórios **frontend** e **backend** (separadamente) para instalar as dependencias de cada projeto.

### Feito isso, para executar a aplicação corretamente você deve:

- iniciar o servidor back-end executando `npm start` dentro da pasta **backend**

  - este comando inciará um servidor local na porta [8080](http://localhost:8080) que realizará a conexão entre o front-end e a API do Mercado Livre.

- iniciar o servidor front-end execurando `npm start` agora dentro da pasta **frontend**
  - este comando iniciará um servidor local na porta [3000](http://localhost:3000) e abrirá a aplicação no navegador.

**IMPORTANTE:** ambos servidores precisam estar executando ao mesmo tempo para que a aplicação execute corretamente!

## Autoria

Laira Almas | [github](https://github.com/lairaalmas) | [github.io](https://lairaalmas.github.io/)
