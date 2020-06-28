<h1 align="center">
  <img alt="GoBarber" title="#delicinha" src=".github/logo.svg" width="200px" />
</h1>

<p align="center">
  <a href="https://github.com/ronnyacacio">
    <img alt="Author" src="https://img.shields.io/badge/author-ronnyacacio-7159c1?style=flat-square">
  </a>

  <a href="#">
    <img alt="Languages" src="https://img.shields.io/github/languages/count/ronnyacacio/go-barber?color=7159c1&style=flat-square">
  </a>

  <a href="https://github.com/ronnyacacio/go-barber/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/ronnyacacio/go-barber?color=7159c1&style=flat-square">
  </a>

  <a href="https://github.com/ronnyacacio/go-barber/commits/master">
    <img alt="LastCommit" src="https://img.shields.io/github/last-commit/ronnyacacio/go-barber?color=7159c1&style=flat-square">
  </a>

  <a href="#">
    <img alt="RepoSize" src="https://img.shields.io/github/repo-size/ronnyacacio/go-barber?color=7159c1&style=flat-square">
  </a>

  <a href="https://github.com/ronnyacacio/go-barber/blob/master/LICENSE.md">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=7159c1&style=flat-square">
  </a>
</p>

<br />

## 💻 Projeto

Esse projeto foi feita para automatizar o processo de agendamentos em estabelecimentos de beleza, onde prestadores de serviços, que utilizam a aplicação WEB, podem se cadastrar, e usuários poderão marcar agendamentos com estes provedores pela aplicação mobile. A aplicação é bem completa, com envio de emails para os prestadores de acordo com as ações dos clientes na parte mobile.

<br />

## ⛏ API

<h1 align="center">
    <img src=".github/api.png" />
</h1>

## 🌐 WEB

<h1 align="center">
    <img src=".github/gobarber-web.gif" />
</h1>

## 📱 Mobile

<h1 align="center">
    <img src=".github/gobarber-mobile.gif" />
</h1>

## 🚀 Principais Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Node](https://nodejs.org/en/)
- [Expo](https://docs.expo.io/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Date-fns](https://date-fns.org/)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Sequelize](https://sequelize.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://www.npmjs.com/package/multer)
- [Bee-queue](https://github.com/bee-queue/bee-queue)
- [NodeMailer](https://nodemailer.com/about/)
- [Redux](https://redux.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [UnForm](https://github.com/Rocketseat/unform)
- [React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Navigation](https://reactnavigation.org/)

<br />

## 🔥 Instalação

```bash
# Clone este repositório
$ git clone https://github.com/ronnyacacio/go-barber.git

# Crie um arquivo .env na pasta backend e o preencha conforme o arquivo .env.example
# Crie um banco de dados postgres na sua máquina com o nome go-barber

# Navegue até a pasta backend e execute os seguintes comandos:
$ yarn
$ yarn sequelize db:migrate
$ yarn dev
$ yarn queue

# Depois disso, entre na pasta web e execute os comandos:
$ yarn
$ yarn start

# E finalmente, entre na pasta mobile e execunte os comandos:
$ yarn
$ expo start

# Observações:
- Não esqueça de mudar a baseURL no arquivo `src/services/api.ts` da pasta e mobile para o IP da sua máquina
```

<p align="center">
  Made with 💜 by <a href="https://www.linkedin.com/in/ronnyacacio/"> Ronny Acácio </a>
</p>
