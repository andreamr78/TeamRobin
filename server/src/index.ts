import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, 
});

await server.start();
app.use('/graphql', expressMiddleware(server));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
