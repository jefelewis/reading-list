// Imports: Mongoose
import mongoose from 'mongoose';

// Mongoose: Schema
const SCHEMA = mongoose.Schema;

// Schema: Book
const BOOKSCHEMA = new SCHEMA({
  name: String,
  genre: String,
  authorId: String
});


// Exports
module.exports = mongoose.model('Book', BOOKSCHEMA);