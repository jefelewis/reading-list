// Imports: Mongoose
import MONGOOSE from 'mongoose';

// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Schema: Book
const BOOKSCHEMA = new SCHEMA({
  name: String,
  genre: String,
  authorId: String
});


// Exports
module.exports = MONGOOSE.model('Book', BOOKSCHEMA);