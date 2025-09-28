import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  retailerId: String,
  items: [{ productId: String, qty: Number }],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Order', schema);
