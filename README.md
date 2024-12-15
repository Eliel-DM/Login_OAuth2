
# **LoginPage OAuth2 Bird ID**

Este projeto implementa um serviço de autenticação utilizando **CPF** e **OTP** (**One-Time Password**) para integração com o sistema **Bird ID**. Ele consome a API pública da **Soluti** para gerar tokens de acesso com **OAuth2**.

## **Descrição Geral da API**

A aplicação fornece um endpoint `/login` que aceita um **CPF** e um **OTP** enviados no corpo da requisição.  
O sistema autentica os dados enviados junto ao serviço **Bird ID** e retorna um token de acesso para utilização em outros serviços protegidos.

## **Requisitos**

- **Node.js** versão 14 ou superior.
- Gerenciador de pacotes: **npm** ou **yarn**.
- Dependências do projeto:
  - `express`
  - `axios`
  - `dotenv`
  - `cors`

---
## **Configuração do Ambiente**
#### [Headers e RequestBody](https://docs.vaultid.com.br/workspace/cloud/api/autenticacao-de-usuarios/autenticacao-em-sistemas-desktop)

Para executar o projeto, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
CLIENT_ID=seu_client_id
CLIENT_SECRET=seu_client_secret
AUTH_ENDPOINT=https://birdid.soluti.com.br/oauth/token 
