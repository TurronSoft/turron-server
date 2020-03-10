import { ApolloServer } from "apollo-server-express";
import { resolvers } from "../resources/resolvers";
import { typeDefs } from "../resources/schemas";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

console.log(
  `Apollo Server: http://localhost:${process.env.PORT}${server.graphqlPath}`
);

export default server;
