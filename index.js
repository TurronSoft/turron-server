import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./src/resources/resolvers";
import { typeDefs } from "./src/resources/schemas";
require("dotenv").config();
require("./src/config/db");
const app = express();
const numeroPuerto = 9000;

app.get("/", (req, res) => {
  res.send("Plantilla del servidor");
});

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(numeroPuerto, () => {
  console.log(`server: http://localhost:${numeroPuerto}`);
  console.log(
    `Apollo Server: http://localhost:${numeroPuerto}${server.graphqlPath}`
  );
});
