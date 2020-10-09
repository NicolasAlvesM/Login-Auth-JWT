# Login-Auth-JWT
uma aplicação que faz a autenticação de login de um usuário no sistema.

## Funcionalidades

- [x] Usuário pode criar sua conta.
- [x] Usuário pode logar, e se manter logado ate ele mesmo fazer logout.
- [ ] Caso o usuário esqueça sua senha ele pode recuperar por email.
 
## Oque aprendi?
 - Context API do react, para compartilhar um mesmo dado entre varias telas.
 - Antes de salvar a senha do usuário em um banco de dados é necessario criptografar essa senha.
 - Após o login do usuário todas as requisições para o servidor são feitas utilizando o Token do usuário, esse token fica salvo na memoria do dispositivo.
 - É utilizado token para não haver necessidade de digitar a senha e usuário a cada requisição.
 - É possivel definir um tempo de expiração para o token gerado.
## Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:


* [Node](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [JWT](https://jwt.io/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Express](https://expressjs.com/)
* [Axios](https://github.com/axios/axios)
* [Javascript](https://www.javascript.com/)
* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)



## Executando a aplicação
### Pré-requisitos
- É necessário possuir o Node.js instalado no computador
- Também, é preciso ter um gerenciador de pacotes seja o NPM ou Yarn.

### Executando  


  #### API
  ```
   $ cd server
   ##### Instalando as dependências do projeto.
   $ yarn # ou npm install
   ##### Inicie a API
   $ yarn start # ou npm start
  ```
  #### Aplicação web
  ```
   $ cd web
   ##### Instalando as dependências do projeto.
   $ yarn # ou npm install
   ##### Inicie a aplicação web
   $ yarn start # ou npm start
  ```
