# Teste Casas Bahia ![alt text](readme-img/image.png)


![Badge](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)
![Badge](https://img.shields.io/badge/Licença-MIT-blue)

## Descrição

Este repositório contém o código-fonte do projeto de teste para o cliente Casas Bahia, desenvolvido com o objetivo de automatizar testes utilizando Cypress.

## Funcionalidades testadas

- **Cadastro:** Teste automatizado de criação de cadastro com sucesso e sem sucesso.
- **Login:** Teste automatizado de login com sucesso e sem sucesso.
- **Transferência:** Teste automatizado de transferencia de valores entre contas com sucesso e para conta inexistente.
- **Saque:** Teste automatizado de saque maior que o saldo disponível.
- **Saldo:** Verificação de saldo após transação.

## Estrutura do Projeto

```bash
nome-do-projeto
├── bugbank-ui/
│   ├── components/
│   └── App.js
├── test
│   ├──
│   └──
├── .env.example
├── package.json
└── README.md
```

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/) (ou outra dependência, se aplicável)
- [Cypress]()

Além disso, é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

## Instalação

Siga os passos abaixo para instalar e configurar o projeto localmente:

1. Clone este repositório:
   ```bash
    git clone https://github.com/jhonatasmatos/bugbank.git
2. Acesse a pasta raiz onde você fez o clone e instale as dependencias com:
    ```bash
    yarn
3. Para rodar as APIs que vamos consultar execute:
    ```bash
    yarn dev
    ```
Após a aplicação estar compliada, será necessária a abertura de um novo terminal:
    ```
    Ctrl + Shift + ' 
    ```

Vá até a pasta onde os testes estão localizados:
    ```
    C:\{YOUR-USER}\cb-teste\test
    ```



