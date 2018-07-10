// Imports: Mongoose
const mongoose = require('mongoose');


// Mongoose: Schema
const SCHEMA = mongoose.Schema;

// Mongoose: Author Schema
const AUTHORSCHEMA = new SCHEMA({
  name: {type: String, required: true},
  age: {type: Number, required: true}
});


// Exports
module.exports = mongoose.model('Author', AUTHORSCHEMA);