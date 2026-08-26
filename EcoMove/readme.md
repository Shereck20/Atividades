
## Tecnologias utilizadas

### Front-end
- HTML
- CSS
- JavaScript

### Back-end
- Node.js
- Express

### Banco de dados
- PostgreSQL

## Estrutura do Projeto
ecomove/
├── db/
│ └── connection.js
├── services/
│ ├── atividade.js
│ ├── usuarios.js
├── routes/
│ ├── atividade.js
│ └── usuarios.js
├── public/
│  └──assets/
│    ├── index.html
│    ├── style.css
│    └── script.js
├── database.sql
├── app.js
├── package.json
├── .env
└── .gitignore


## Como executar o projeto

### 1. Clone ou baixe o projeto

```bash
1. Instale as dependências
npm install
2. Configure o banco de dados

Crie o banco no PostgreSQL:

Execute o arquivo:
database.sql

3. Configure o .env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=senai
DB_DATABASE=ecomove
5. Execute o projeto
npm run dev

Acesse no navegador:

http://localhost:3000