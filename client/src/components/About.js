// components/Home.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { ItemContext } from './ItemContext';
//import Cart from './Cart';

function Home() {
  const { cartItems, addToCart } = useContext(CartContext);
  const { items } = useContext(ItemContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <div className="container mt-4">
      <h1>Submitted Items</h1>
      <div className="row g-4">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card h-100 shadow">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Category: {item.category}</p>
                  <p className='card-text'>Rs:{item.rs}</p>
                  <div className="mt-auto">
                    <button
                      className={`btn ${isItemInCart(item.id) ? 'btn-secondary' : 'btn-primary'} me-2`}
                      onClick={() => handleAddToCart(item)}
                      disabled={isItemInCart(item.id)}
                    >
                      {isItemInCart(item.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                    <button className="btn btn-success">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
