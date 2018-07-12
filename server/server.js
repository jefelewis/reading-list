// Imports: Express
const EXPRESS = require('express');
const APP = EXPRESS();

// Imports: CORS
const CORS = require('cors');

// Imports: GraphQL
const GRAPHQLHTTP = require('express-graphql');
const SCHEMA = require('./graphql-schemas/schema.js');

// Imports: Mongoose
const MONGOOSE = require('mongoose');
const MONGOURI = require('../config/mongo-uri.js');

// Imports: Middleware
const morgan = require('morgan');
const bodyParser = require('body-parser');


// Database: Connection
MONGOOSE.connect(
  MONGOURI,
  { useNewUrlParser: true },
  // Error Handling
  (err) => {
    if(err) {
      console.log(`Unable to connect to the Database. Error: ${err}`);
    }
    else {
      console.log(`Connected to Database.`);
    }
});


// Use: CORS
APP.use(CORS())

// Use: Middleware
APP.use('/graphql', GRAPHQLHTTP({
  graphiql: true,
  schema: SCHEMA
}));

// Use: Static Files


// Express: Port
const PORT = 4000 || process.env;

// Express: Listener
APP.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
});


// Exports
module.exports = APP;