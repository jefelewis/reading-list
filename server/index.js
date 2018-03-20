// Imports: Express
import express from 'express';
import router from './router.js';

// Imports: GraphQL
import graphqlHTTP from express-graphql;

// Initialize Express App
const app = express();

// Imports: Middleware
import morgan from 'morgan';
import bodyParser from 'body-parser';


// Use: Middleware


// Use: Static Files



// Use: Router
app.use('./router.js');

// Define: Port
const port = 3000;

// Listener
app.listen(port, () => {
  console.log('The server has started on port:  ' + port);
});