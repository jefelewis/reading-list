// Imports: Dependencies
import mongoose from 'mongoose';

// Mongoose: Schema
const SCHEMA = mongoose.Schema;

// Mongoose: Author Schema
const AUTHOR = new SCHEMA({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

// Exports
module.exports = mongoose.model('Author', AUTHOR);
