// Imports: Express
import express from 'express';
const APP = express();

// Imports: CORS
import cors from 'cors';

// Imports: GraphQL
import graphQLHTTP from 'express-graphql';
import schema from './schema/schema.js';

// Imports: Mongoose
import mongoose from 'mongoose';
import mongoURI from '../config/mongo-uri.js';

// Imports: Middleware
import morgan from 'morgan';
import bodyParser from 'body-parser';


// Database: Connection
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to database.');
});


// Use: CORS
APP.use(cors())

// Use: Middleware
APP.use('/graphql', graphQLHTTP({
  graphiql: true,
  schema: schema
}));

// Use: Static Files


// Use: Router
// APP.use('./router.js');

// Define: Port
const PORT = 4000;


// Listener
APP.listen(port, () => {
  console.log('The server has started on port: ' + PORT);
});


// Exports
export default APP;