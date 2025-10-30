import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-page d-flex align-items-center justify-content-center">
      <div className="register-form shadow p-5 rounded bg-white">
        <h2 className="text-center mb-4">Create Your FLIPCART Account</h2>
        <form>
          <div className="form-group mb-3">
            <label>Full Name</label>
            <input type="text" className="form-control rounded-pill" placeholder="Enter your full name" required />
          </div>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input type="email" className="form-control rounded-pill" placeholder="Enter email" required />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control rounded-pill" placeholder="Create password" required />
          </div>
          <div className="form-group mb-4">
            <label>Confirm Password</label>
            <input type="password" className="form-control rounded-pill" placeholder="Confirm password" required />
          </div>
          <button type="submit" className="btn btn-warning w-100 rounded-pill">
            Register
          </button>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
