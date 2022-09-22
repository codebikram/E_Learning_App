import React from 'react';
import Message from './message/Message';
import SignIn from './signin/SignIn';
import logo from '../img/Logo_Desktop_Tab.png';

const Main = (props) => {
  return (
    <>
      <div className="container mt-5 main">
        <div className="row img-section">
          <div className="img-logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col md-6 body-section">
            <Message />
          </div>
          <div className="col-lg-6 col md-6 body-section">
            <SignIn onSignIn={props.handleLogin} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
