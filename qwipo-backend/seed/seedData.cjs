// CommonJS for easier node run
const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run(){
  await client.connect();
  const db = client.db(process.env.DB_NAME || 'qwipo_db');
  await db.collection('products').deleteMany({});
  await db.collection('orders').deleteMany({});
  await db.collection('retailers').deleteMany({});

  const products = [
    { _id: 'p1', name: 'NR Noor Jahan HMT Rice -25kg', brand: 'NR', price: 1200, mrp:1500, popularity: 200, image: '/logo.png' },
    { _id: 'p2', name: 'Surya Teja HMT Rice -25kg', brand: 'Surya', price: 1190, mrp:1485, popularity:150, image: '/logo.png' },
    { _id: 'p3', name: 'Apple Brand Toor Dal', brand: 'Apple', price:1180, mrp:1470, popularity:140, image: '/logo.png' }
  ];
  const retailers = [
    { _id: 'r1', name: 'Kirana A', storeType: 'Kirana', location: 'Hyderabad' },
    { _id: 'r2', name: 'Kirana B', storeType: 'Kirana', location: 'Bengaluru' }
  ];
  const orders = [
    { retailerId: 'r1', items: [{productId:'p1', qty:2}, {productId:'p3', qty:1}], totalPrice: 3600 },
    { retailerId: 'r2', items: [{productId:'p2', qty:3}], totalPrice: 3570 },
    { retailerId: 'r1', items: [{productId:'p2', qty:1}], totalPrice: 1190 }
  ];
  await db.collection('products').insertMany(products);
  await db.collection('retailers').insertMany(retailers);
  await db.collection('orders').insertMany(orders);
  console.log('Seeded DB');
  await client.close();
}
run().catch(console.error);
