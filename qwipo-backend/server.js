import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, ()=> console.log(`Backend running on ${PORT}`));
}).catch(err => {
  console.error('DB connect failed', err);
  process.exit(1);
});
