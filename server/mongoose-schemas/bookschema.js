// Imports: Dependencies
import mongoose from 'mongoose';

// Mongoose: Schema
const SCHEMA = mongoose.Schema;

// Mongoose: Book Schema
const BOOK = new SCHEMA({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: String, required: true },
});

// Exports
module.exports = mongoose.model('Book', BOOK);
