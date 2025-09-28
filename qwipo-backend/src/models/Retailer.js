import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  _id: String,
  name: String,
  storeType: String,
  location: String,
  joinedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Retailer', schema);
