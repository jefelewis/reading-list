// Imports: Express
const express = require('express');
const APP = express();

// Imports: CORS
const cors = require('cors');

// Imports: GraphQL
const graphQLHTTP = require('express-graphql');
const schema = require('./schema/schema.js');

// Imports: Mongoose
const mongoose = require('mongoose');
const mongoURI = require('../config/mongo-uri.js');

// Imports: Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Database: Connection
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true },
  // Error Handling
  (err) => {
    if(err) {
      console.log('Unable to connect to the server. Error: ', err);
    }
    else {
      console.log('Connected to Database.');
    }
});


// Use: CORS
APP.use(cors())

// Use: Middleware
APP.use('/graphql', graphQLHTTP({
  graphiql: true,
  schema: schema
}));

// Use: Static Files


// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log('The server has started on port: ' + PORT);
});


// Exports
module.exports = APP;