import React from 'react';

const ProductList = React.memo(({ products, onAdd }) => {
  // logic: list only re-renders if products change
  return (
    <div className="product-grid">
      {products.length === 0 ? (
        <p>No items found matching your search.</p>
      ) : (
        products.map(p => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.title} style={{ height: '120px' }} />
            <h4>{p.title.slice(0, 30)}...</h4>
            <p><strong>${p.price}</strong></p>
            <p style={{fontSize: '12px', color: '#666'}}>{p.category}</p>
            <button onClick={() => onAdd(p)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
});

export default ProductList;