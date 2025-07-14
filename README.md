# 💊  CRUD - Projeto Farmácia


API desenvolvida com NestJS para gerenciamento de produtos de uma farmácia. O sistema permite realizar as operações básicas de um CRUD: criar, listar, atualizar e deletar produtos.

## 🧪 Tecnologias utilizadas
NestJS – Framework backend Node.js

TypeScript – Tipagem estática

Node.js – Ambiente de execução

ESLint & Prettier – Padronização de código

Jest – (Estrutura para testes)

MySql workbench (com TypeORM, se estiver usando)

## 🔧 Funcionalidades da API
✅ Criar um novo produto

✅ Listar todos os produtos

✅ Buscar produto por ID ou nome

✅ Atualizar informações de um produto

✅ Deletar um produto


## 📁 Estrutura do Projeto
.
├── src
│   ├── produto/              # Módulo principal do CRUD
│   │   ├── produto.controller.ts
│   │   ├── produto.service.ts
│   │   ├── produto.entity.ts
│   │   └── produto.module.ts
│   ├── app.module.ts
│   └── main.ts
├── test/                     # Arquivos de testes
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
└── package.json
📦 Como executar localmente
Pré-requisitos
Node.js instalado

MySQL (ou outro banco relacional)

Nest CLI (npm i -g @nestjs/cli)

Passos:
bash
Copiar
Editar
# 1. Clonar o repositório
git clone https://github.com/giubarreto/nome-do-repositorio.git

# 2. Entrar na pasta
cd nome-do-repositorio

# 3. Instalar dependências
npm install

# 4. Rodar a aplicação em modo desenvolvimento
npm run start:dev


🧑‍💻 Desenvolvedora
Giulia Salgado Barreto
Estudante Full Stack | Generation Brasil

