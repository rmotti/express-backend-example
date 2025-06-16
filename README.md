## 👨‍💻 Desenvolvedores

- [@guissx](https://github.com/guissx) - Gustavo Ferreira Cabral
- [@rmotti](https://github.com/rmotti) - Rodrigo Motti de Santana

---

# 💰 Gerenciador de Transações Financeiras

API para gerenciamento de transações financeiras pessoais, construída com Node.js e Express. O projeto segue os princípios da arquitetura distribuída e orientação a objetos, utilizando Docker para conteinerização e MongoDB para persistência de dados.

---

## ✅ Requisitos Atendidos

- ✅ Arquitetura distribuída em múltiplos serviços que se complementam
- ✅ Persistência de dados com banco de dados MongoDB
- ✅ Conteinerização completa com Docker e Docker Compose
- ✅ Estrutura de código organizada por responsabilidade (controllers, services, models, routes)
- ✅ Princípios SOLID e boas práticas de programação
- ✅ Repositório com versionamento contínuo via Git

---

## 📦 Funcionalidades da API

- Autenticação com JWT
- Operações CRUD de transações financeiras:
  - `POST /transactions`
  - `GET /transactions`
  - `GET /transactions/:id`
  - `PUT /transactions/:id`
  - `PATCH /transactions/:id`
  - `DELETE /transactions/:id`

---

## 🗃️ Banco de Dados

- Banco utilizado: MongoDB
- Contêiner MongoDB gerenciado via Docker Compose
- Interface de visualização: mongo-express (porta 8081)

---

## 🐳 Uso com Docker

Para subir o ambiente:

```bash
docker-compose up --build
```

Serviços iniciados:

- API Node.js rodando na porta 3000
- MongoDB rodando na porta 27017
- Mongo Express acessível via `http://localhost:8081`

---

## ⚙️ Estrutura de Código

```
express-backend-SD/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── README.md
```

- `controllers/` – Camada de entrada das requisições HTTP
- `services/` – Regras de negócio e lógica de aplicação
- `models/` – Definição dos esquemas MongoDB
- `routes/` – Definição das rotas da API
- `middlewares/` – Funções intermediárias como autenticação JWT

---

## 🔐 Autenticação

- Proteção das rotas com JWT
- Controle de acesso por usuário autenticado
- Armazenamento de senhas com bcrypt

---

## 📑 Execução Local

1. Renomeie `.env.example` para `.env` e configure as variáveis
2. Execute com Docker Compose:

```bash
docker-compose up --build
```

A API estará disponível em `http://localhost:3000`.

---

## 🛠 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Docker / Docker Compose
- JWT
- Bcrypt
- Git

---


