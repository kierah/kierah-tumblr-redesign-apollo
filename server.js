import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './data/schema';

const GRAPHQL_PORT = 4000;

const graphQLServer = express();

graphQLServer.use(cors());
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
