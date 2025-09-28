import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  _id: String,
  name: String,
  brand: String,
  price: Number,
  mrp: Number,
  category: String,
  popularity: Number,
  image: String
});
export default mongoose.model('Product', schema);
