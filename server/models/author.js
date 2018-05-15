// Imports: Mongoose
// import mongoose from 'mongoose';
const mongoose = require('mongoose');


// Mongoose: Schema
const SCHEMA = mongoose.Schema;


// Schema: Author
const AUTHORSCHEMA = new SCHEMA({
  name: String,
  age: Number
});


// Exports
// export default mongoose.model('Author', AUTHORSCHEMA);
module.exports = mongoose.model('Author', AUTHORSCHEMA);