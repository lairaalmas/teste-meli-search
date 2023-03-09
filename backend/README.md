# Meli Search (back-end)

Este diretório faz parte do teste front-end desenvolvido para o Mercado Livre.

## 1 Sobre a aplicação

O backend desse projeto é responsável receber as requisições vindas do front-end, realizar a comunicação com a [API do Mercado Livre](api.mercadolibre.com/) e retornar um objeto apenas com as informações definidas na especificação.

As informações sobre rotas e dados retornados estão apresentados na documentação do front-end na seção 1.

## 2 Sobre as Tecnologias

O backend foi desenvolvido em **javascript** usando [nodejs](https://nodejs.org/en/). O servidor foi criado usando [express](https://expressjs.com/), onde foram definidas as rotas, prevenção de erros de CORS e gerenciamento de mensagens de erro.

Diferente do front-end as requisições http foram realizadas usando [axios](https://axios-http.com/).

Os testes foram escritos usando [Jest](https://jestjs.io/pt-BR/).

## Autoria

Laira Almas | [github](https://github.com/lairaalmas) | [github.io](https://lairaalmas.github.io/)
