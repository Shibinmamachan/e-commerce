import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-form shadow p-5 rounded bg-white">
        <h2 className="text-center mb-4">Login to FLIPCART</h2>
        <form>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input type="email" className="form-control rounded-pill" placeholder="Enter email" required />
          </div>
          <div className="form-group mb-4">
            <label>Password</label>
            <input type="password" className="form-control rounded-pill" placeholder="Password" required />
          </div>
          <button type="submit" className="btn btn-warning w-100 rounded-pill">Login</button>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/Register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
