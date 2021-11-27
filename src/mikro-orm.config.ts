import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Post } from "./entities/Post";

export default {
  type: "postgresql",
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  dbName: "postgres",
  debug: true,
  entities: [Post],
  port: 8000,
  user: "postgres",
  password: "225846310",
} as Parameters<typeof MikroORM.init>[0];
