// Imports: Dependencies
import express from 'express';
import mongoose from 'mongoose';
import GRAPHQLHTTP from 'express-graphql';
import cors from 'cors';
import opn from 'opn';

// Imports: GraphQL
import SCHEMA from './graphql-schemas/schema';

// Express App
const APP = express();

// MongoDB: URI
const MONGOURI = 'mongodb://localhost/ReadingList';

// MongoDB: Database Connection
mongoose.connect(
  MONGOURI,
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(`Unable to connect to the Database. Error: ${error}`);
    }
    else {
      console.log('Connected to Database.');
    }
  },
);

// Middleware: CORS
APP.use(cors());

// Middleware: GraphQL
APP.use('/graphql', GRAPHQLHTTP({
  graphiql: true,
  schema: SCHEMA,
}));

// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});

// Open URL On Server Start
opn(`http://localhost:${PORT}/graphql`);

// Exports
export default APP;
