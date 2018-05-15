// Imports: Mongoose
// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Mongoose: Schema
const SCHEMA = mongoose.Schema;


// Schema: Book
const BOOKSCHEMA = new SCHEMA({
  name: String,
  genre: String,
  authorId: String
});


// Exports
// export default mongoose.model('Book', BOOKSCHEMA);
module.exports = mongoose.model('Book', BOOKSCHEMA);