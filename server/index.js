// Imports: Express
const express = require('express');
const app = express();

// Imports: GraphQL
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

// Imports: Mongoose
const mongoose = require('mongoose');
const MONGOURI = require('../config/mongo-uri.js');

// Imports: Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Database: Connection
mongoose.connect(MONGOURI);
mongoose.connection.once('open', () => {
  console.log('Connected to database.');
});


// Use: Middleware
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}));

// Use: Static Files


// Use: Router
// app.use('./router.js');

// Define: Port
const port = 3000;

// Listener
app.listen(port, () => {
  console.log('The server has started on port: ' + port);
});