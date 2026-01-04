import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('');

  // fetching data from fakestore api
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error("error fetching products", err));
  }, []);

  // using useCallback so ProductList doesn't re-render when cart changes
  const handleAddToCart = useCallback((p) => {
    setCart(prev => {
      const isExist = prev.find(item => item.id === p.id);
      if (isExist) {
        return prev.map(item => 
          item.id === p.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...p, qty: 1 }];
    });
  }, []);

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if(item.id === id) {
        const val = item.qty + delta;
        return val > 0 ? { ...item, qty: val } : item;
      }
      return item;
    }));
  };

  const remove = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  // filter + search + sort logic
  const filteredData = useMemo(() => {
    let result = items.filter(p => 
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (cat === 'all' || p.category === cat)
    );

    if (sort === 'low') result.sort((a, b) => a.price - b.price);
    if (sort === 'high') result.sort((a, b) => b.price - a.price);
    
    return result;
  }, [items, search, cat, sort]);

  const clearAll = () => {
    setSearch('');
    setCat('all');
    setSort('');
  };

  return (
    <div className="main-wrapper">
      <nav className="navbar">
        <h2>Mini Store</h2>
        <div className="filters-bar">
          <input 
            type="text" 
            placeholder="Search products..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
          />
          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
          <button onClick={clearAll} className="clear-btn">Clear</button>
        </div>
      </nav>

      <div className="layout">
        <div className="products-container">
          <ProductList products={filteredData} onAdd={handleAddToCart} />
        </div>
        <aside className="cart-container">
          <Cart items={cart} onUpdate={updateQty} onRemove={remove} />
        </aside>
      </div>
    </div>
  );
}

export default App;