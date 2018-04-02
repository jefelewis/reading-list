// Imports: Mongoose
const MONGOOSE = require('mongoose');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Schema: Author
const AUTHORSCHEMA = new SCHEMA({
  name: String,
  age: Number
});


// Exports
module.exports = MONGOOSE.model('Author', AUTHORSCHEMA);