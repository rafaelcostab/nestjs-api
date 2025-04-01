# Nest.JS Desenvolvendo APIs Escaláveis

Instala o node
```sh
brew install node
```

Instala o CLI do Nest, o parâmetro `-g` é para que fique global na máquina.
```sh
npm install -g @nestjs/cli
```

Cria aplicação NestJS
```sh
nest new nestjs-api
```

Se tiver usando VSCode é intessante instalar alguns plugins, para ajudar na formatação e verificação de qualidade de código e etc.
- Prettier - Code formatter (Prettier).
- ESLint (Microsoft).
- Rest Client (Rest Client)
- Prisma

Roda o projeto
```sh
npm run start:dev
```

Gera um módulo usando NEST
```sh
nest generate module products
```

Gera um controller
```sh
nest generate controller products
```

Podemos gerar toda estrutura para um crud através do generate resource
```sh
nest generate resource
```

Instala Prisma
```sh
npm install @prisma/client
```
Inicia projeto prisma
```sh
npx prisma init
```

Variável de ambiente   
No diretório `prisma` o arquivo `schema.prisma` configura uma variável de ambiente `DATABASE_URL`, essa variável de ambiente é configura no arquivo `.env` na raiz do projeto. O Prisma cria a configuração para o bando de dados postgresql, mas nesse exemplo utilizaremos o Sqlite.

No arquivo `.env` configure a url com caminho para o arquivo
```sh
DATABASE_URL="file:./database.sqlite"
```

Criar tabelas com base nas models com prisma
```sh
npx prisma migrate dev
```

Instala libs para validação do request
```sh
npm install class-validator class-transformer
```
