import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'node:path';
import type { Request, Response } from 'express';
import db from './config/connection.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './utils/auth.js';
import cors from 'cors'; 
import type { CorsOptions } from 'cors';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const startApolloServer = async () => {
  await server.start();
  await db();

  const DEFAULT_PORT = 4000; 
  const PORT = process.env.PORT || DEFAULT_PORT; 
  const app = express();

  const corsOptions: CorsOptions = {
    origin: (_origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      callback(null, true); 
    },
    credentials: true, 
  };

  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions)); 
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json()); 

  app.use('/graphql', expressMiddleware(server as any, {
    context: async ({ req }) => {
      console.log('Incoming GraphQL request:', req.body); // Log incoming requests
      req.body = req.body || {};
      const user = authenticateToken(req);
      return { user };
    },
  }));

  // Serve static files from client/dist regardless of production mode
  app.use(express.static(path.resolve('client/dist')));

  app.get('*', (_req: Request, res: Response) => {
    res.sendFile(path.resolve('client/dist/index.html'));
  });

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  }).on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EACCES' || err.code === 'EADDRINUSE') {
      console.error(`Port ${PORT} is not available. Please use a different port.`);
      process.exit(1);
    } else {
      throw err;
    }
  });
};

startApolloServer();
