# Bem vindos ao repositório Blogs-API


<strong>👨‍💻 O que foi desenvolvido</strong><br />
    Aqui você vai encontrar os detalhes de como foi estruturado este projeto e instruções para rodar.
    Este projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!
    É uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.
    
    1. Foi desenvolvido os endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;

    2. Para fazer um post é necessário usuário e login, possui relacionamentos,  **relação entre** `user` e `post`; 

    3. É necessário utilização das categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

<br />


# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## 👉 Com Docker

> :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)

---
  
  ## 👉 Sem Docker
  
  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
    
  - ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  </br>
</details>


<details>
<summary><strong>Como ter acesso ao projeto e instalar as dependências</strong></summary><br />

    1. Entre na pasta do repositório que você acabou de clonar ou fazer o download do arquivo zip:
    * `cd pasta-do-repositório`

    2. Instale as dependências:
    *`npm install`

    3. Suba os imagens do servidor node e do banco de do docker-compose com o comando:
    *`docker-compose up -d --build
    
    </br>
</details>

<details>
  <summary><strong>👀 REST</strong></summary>

  #### Status HTTP

  Tenha em mente que todas as "respostas" devem respeitar os [status do protocolo HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status) com   base no que o REST prega.

  Alguns exemplos:
  - Requisições que precisam de token mas não o receberam devem retornar um código de `status 401`;

  - Requisições que não seguem o formato pedido pelo servidor devem retornar um código de `status 400`;

  - Um problema inesperado no servidor deve retornar um código de `status 500`;

  - Um acesso ao criar um recurso, no nosso caso usuário ou post, deve retornar um código de `status 201`.

</details>

<strong>🎲 Entidades do projeto</strong><br />
  - USER
  - ORDER
  - PRODUCT
