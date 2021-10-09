import { ApolloServer } from "apollo-server-express";
import { Application } from "express";

import schema from "./schema";

export async function mountGraphqlServer(app: Application, path = "/graphql"): Promise<void> {
  const server = new ApolloServer({
    schema,
    debug: true,
    introspection: true,
  });
  await server.start();
  server.applyMiddleware({ app, path });
}
