import { User } from "../entities/User";
import { MyContext } from "../types";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import argon2 from "argon2";

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async register(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { em }: MyContext
  ) {
    const hashedPassword = await argon2.hash(password);
    const user = em.create(User, { username, password: hashedPassword });
    await em.persistAndFlush(user);

    return user;
  }
}
