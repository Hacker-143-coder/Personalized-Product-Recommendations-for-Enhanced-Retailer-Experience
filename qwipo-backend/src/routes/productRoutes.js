import express from 'express';
import Product from '../models/Product.js';
import fetch from 'node-fetch';
const router = express.Router();

router.get('/', async (req,res)=>{
  const list = await Product.find({});
  res.json(list);
});

router.post('/', async (req,res)=>{
  const p = req.body;
  try {
    const created = await Product.create(p);
    res.status(201).json(created);
  } catch(e){
    res.status(400).json({error: e.message});
  }
});

// proxy recommendation from recommender service
router.get('/recommend/:retailerId', async (req,res)=>{
  const { retailerId } = req.params;
  const recommenderUrl = process.env.RECOMMENDER_URL || 'http://localhost:8001';
  try {
    const r = await fetch(`${recommenderUrl}/recommend_by_retailer/${retailerId}`);
    const body = await r.json();
    // get product details
    const products = await Product.find({ _id: { $in: body.productIds }});
    res.json({ recommendations: products });
  } catch(err){
    console.error(err);
    res.status(500).json({ error: 'recommendation failed' });
  }
});

export default router;
