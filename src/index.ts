import express from "express";

import { mountGraphqlServer } from "./graphql";

(async () => {
  const app = express();

  await mountGraphqlServer(app);

  app.listen(8080, () => {
    console.log("Express online");
  });
})();
