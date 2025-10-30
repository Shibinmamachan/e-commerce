import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { useNavigate } from 'react-router-dom'; // ✅ Important!
import Nav from './Nav';
// import Payment from './Payment';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div>
    <Nav></Nav>
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className='card-text'>{item.Payment}</p>

                  {/* ✅ BUY navigates to /payment */}
                  <button
                    className="btn btn-success me-2"
                    onClick={() => navigate('/payment',{state:{item}})}


                  >
                    BUY
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default Cart;
