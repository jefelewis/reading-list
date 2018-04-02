// Imports: Express
const EXPRESS = require('express');
const APP = EXPRESS();

// Imports: GraphQL
const GRAPHQLHTTP = require('express-graphql');
const SCHEMA = require('./schema/schema');

// Imports: Mongoose
const MONGOOSE = require('mongoose');
const MONGOURI = require('../config/mongo-uri.js');

// Imports: Middleware
const MORGAN = require('morgan');
const BODYPARSER = require('body-parser');


// Database: Connection
MONGOOSE.connect(MONGOURI);
MONGOOSE.connection.once('open', () => {
  console.log('Connected to database.');
});


// Use: Middleware
APP.use('/graphql', GRAPHQLHTTP({
  graphiql: true,
  SCHEMA
}));

// Use: Static Files


// Use: Router
// APP.use('./router.js');

// Define: Port
const port = 3000;

// Listener
APP.listen(port, () => {
  console.log('The server has started on port: ' + port);
});