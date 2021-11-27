import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";

type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
};

export { MyContext };
