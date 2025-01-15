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
npm install @prima/client
```
Inicia projeto prisma
```sh
npx prisma init
```

Criar tabelas com base nas models com prisma
```sh
npx prisma migrate dev
```