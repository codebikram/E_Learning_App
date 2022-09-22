import React from 'react';
import './Signin.css';
import { useState } from 'react';

const Signin = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSignIn(userName, password);
  };
  return (
    <div className="signin-section">
      <div className="sign">
        <h1 className="text-center">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot">
            <span className="text-forgot">Forgot Password?</span>
          </div>
          <div className="button-section">
            <button type="submit" className="btn btn-sign">
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
