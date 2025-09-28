import React from 'react';

export default function ProductCard({product, onAdd}){
  return (
    <div className="card">
      <div>
        <img src={product.image || '/logo.png'} alt={product.name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <div className="card-price">₹{product.price}</div>
        <div className="card-old-price">₹{product.mrp}</div>
        <button className="card-button" onClick={()=> onAdd && onAdd(product)}>Add</button>
      </div>
    </div>
  );
}
