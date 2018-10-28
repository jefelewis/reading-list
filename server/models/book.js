// Imports: Dependencies
import mongoose from 'mongoose';

// Mongoose: Book Model
const BOOK = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  authorId: { type: String, required: true, trim: true },
},
{
  timestamps: true,
});

// Exports
export default mongoose.model('Book', BOOK);
