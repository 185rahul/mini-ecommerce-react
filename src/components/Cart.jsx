import React from 'react';

const Cart = ({ items, onUpdate, onRemove }) => {
  const total = items.reduce((acc, i) => acc + (i.price * i.qty), 0);

  return (
    <div className="cart-section">
      <h3>Your Shopping Cart</h3>
      {items.length === 0 ? <p>Cart is empty</p> : (
        <div>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.title.slice(0, 15)}...</span>
              <div className="qty-controls">
                <button onClick={() => onUpdate(item.id, -1)}>-</button>
                <span> {item.qty} </span>
                <button onClick={() => onUpdate(item.id, 1)}>+</button>
              </div>
              <button onClick={() => onRemove(item.id)} className="del-btn">Remove</button>
            </div>
          ))}
          <hr />
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;