// Imports: Mongoose
import mongoose from 'mongoose';


// Mongoose: Schema
const SCHEMA = mongoose.Schema;


// Schema: Author
const AUTHORSCHEMA = new SCHEMA({
  name: String,
  age: Number
});


// Exports
export default mongoose.model('Author', AUTHORSCHEMA);