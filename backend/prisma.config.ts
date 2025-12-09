// Este arquivo contém a configuração para o funcionamento correto do Prisma CLI, ou seja, comandos do tipo migrate dependem desse arquivo.
// Como o comando migrate deploy é executado em produção através do comando npm start, tanto esse arquivo quanto a dependência prisma devem estar disponíveis em produção.
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx config/seed.ts"
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
