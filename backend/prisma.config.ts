import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // ให้ Prisma Migrate ใช้ URL จาก .env
    url: env("DATABASE_URL"),
  },
});
