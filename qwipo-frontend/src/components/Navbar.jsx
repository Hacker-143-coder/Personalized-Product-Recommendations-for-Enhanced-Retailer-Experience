import React from 'react';

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Qwipo logo" />
        <div style={{fontWeight:700, marginLeft:8}}>Qwipo</div>
      </div>
      <div style={{flex:1, marginLeft:16}}>
        <input className="navbar-search-input" placeholder="Search products, brands..." />
      </div>
      <div style={{display:'flex', gap:12, alignItems:'center'}}>
        <button className="icon-btn">🛒</button>
        <button className="icon-btn">🔔</button>
      </div>
    </header>
  );
}
