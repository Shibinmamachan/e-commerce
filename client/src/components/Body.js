import React from 'react';
import './Body.css';  // Custom styles

function Body() {
  return (
    <div className="landing-container d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 text-box">
            <h1 className="display-4 text-white fw-bold">Welcome to FLIPCART</h1>
            <p className="lead text-white">
              Discover amazing products, unbeatable prices, and lightning-fast delivery. Shop smarter, live better.
            </p>
            <button className="btn btn-warning btn-lg mt-3">Start Shopping</button>
          </div>

          {/* Optional: Add an image section or let the background image fill the screen */}
          <div className="col-md-6 d-none d-md-block">
            {/* Just space filler so layout works nicely */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
