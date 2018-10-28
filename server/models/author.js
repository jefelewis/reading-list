// Imports: Dependencies
import mongoose from 'mongoose';

// Mongoose: Author Model
const AUTHOR = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, trim: true },
},
{
  timestamps: true,
});

// Exports
export default mongoose.model('Author', AUTHOR);
