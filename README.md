# <p align="center"> Teste Casas Bahia </p>

![alt text](readme-img/image.png)


![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)
![Badge](https://img.shields.io/badge/Licença-MIT-blue)

## Descrição

Este repositório contém o código-fonte do projeto de teste para o cliente Casas Bahia, desenvolvido com o objetivo de automatizar testes utilizando Cypress.

### Cenários de Teste

Aqui estão alguns cenários de teste escritos em Gherkin que cobrem funcionalidades do BugBank:

### Páginas

- [Login](test/cypress/e2e/features/login.cy.js)
- [Cadastro](test/cypress/e2e/features/register.cy.js)
- [Transferência](test/cypress/e2e/features/transfer.cy.js)

### Cenários (Guerkin)

## Cadastro

```gherkin
 Dado que sou um novo usuário do BugBank
 E quero fazer um cadastro
 Quando tento fazer meu registro
 Então ele é feito com sucesso

 Dado que sou um novo usuário
 E quero fazer um cadastro
 Quando tento fazer meu registro sem um nome
 Então recebo mensagem de erro 'Nome não pode ser vazio'
```

## Login

```gherkin
 Dado que sou usuário do BugBank
 Quando faço o login
 Então logo com sucesso

 Dado que sou usuário do BugBank
 Quando tento fazer login sem meu email
 Então recebo mensagem de erro 'Usuário e senha precisam ser preenchidos'
```

## Transferência

```gherkin
 Dado que sou usuário do BugBank
 E faço o login
 Quando tento fazer uma transferência para uma conta aleatória
 Então recebo mensagem de erro 'Conta inválida ou inexistente'
```

### Estrutura do Projeto

```bash
CB-TESTE
├── readme-img/
├── test
│   ├── cypress
│   ├── cypress.config.js
│   └── package.json
├── .gitignore
├── instalador_bugbank.ps1
├── instalador_testes.ps1
└── README.md
```

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/)
- [Cypress]()

Caso você não tenha algumas dessas dependências, os scripts de inicialização irão lembra-lo de instalar. Além disso, é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

## Instalação

Siga os passos abaixo para instalar e configurar o projeto localmente:

1. Clone este repositório:
   ```bash
    git clone https://github.com/rtupiii/teste_cb
2. Acesse a pasta raiz onde você fez o clone e abra o PowerShell no modo administrador:
    ![alt text](readme-img/power_shell_admin.png)

3. Dentro da pasta raiz, inicie os scripts de instalação:
    ```bash
    .\instalador_bugbank.ps1
    ```
    ![alt text](readme-img/installed_bugbank.png)
4. Em outro terminal, nos mesmos moldes do anterior, rode o segundo script:
   ```bash
    .\instalador_testes.ps1
    ```
    ![alt text](readme-img/image-1.png)

5. Vá até a opção E2E Testing dentro do Cypress Runner:

    ![alt text](readme-img/image-2.png)

6. Escolha seu navegador preferido (todos meus testes ocorreram em Chrome) e logo após, a suite estará disponível para ser executada:

    ![alt text](readme-img/image-3.png)

npx cypress run --env grep=@smoke

