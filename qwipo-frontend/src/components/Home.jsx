import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function Home(){
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:5000/api/products')
      .then(r=> setProducts(r.data))
      .catch(()=> setProducts([]));
  },[]);

  const add = (p) => {
    setCart(prev => {
      const found = prev.find(x=> x._id===p._id);
      if(found) return prev.map(x=> x._id===p._id? {...x, qty: x.qty+1}: x);
      return [...prev, {...p, qty:1}];
    });
  };

  return (
    <main className="container">
      <h2 style={{fontSize:28, marginBottom:16}}>Products</h2>
      <div className="grid">
        {products.map(p=> <ProductCard key={p._id} product={p} onAdd={add} />)}
      </div>
    </main>
  );
}
