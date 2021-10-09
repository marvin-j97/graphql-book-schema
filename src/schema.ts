import { readdirSync, readFileSync } from "fs";
import { makeExecutableSchema } from "graphql-tools";
import { resolve } from "path";

import resolvers from "./resolvers";

export const schemaFiles = readdirSync(resolve("graphql")).filter((file) =>
  file.endsWith(".graphql"),
);

const schema = schemaFiles.map((file) => readFileSync(resolve("graphql", file)).toString()).join();

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
