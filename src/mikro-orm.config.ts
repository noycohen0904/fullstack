import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export default {
  type: "postgresql",
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  dbName: "postgres",
  debug: true,
  entities: [Post, User],
  port: 8000,
  user: "postgres",
  password: "225846310",
} as Parameters<typeof MikroORM.init>[0];
