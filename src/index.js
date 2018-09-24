import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import schema from './schemas';
import resolvers from './resolvers';
import getContext from './models';
import Connector from './connector';

const API_URL = 'http://localhost:3000';
const connector = new Connector(API_URL);

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    ...getContext(connector),
  },
  tracing: true,
});

server.applyMiddleware({ app, path: '/graphql' });

app.use(cors());
app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
