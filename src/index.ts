import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  // Create and Run migration
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const post = orm.em.create(Post, { title: "my first post" });
  await orm.em.persistAndFlush(post);
};

main().catch((error) => {
  console.log(error);
});
