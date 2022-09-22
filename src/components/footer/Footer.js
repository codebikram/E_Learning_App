import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="container-fluid footer-section">
      <div className="f-el">
        <p>
          Need Help?<span className="chat">Chat with Us</span>
        </p>
      </div>
      <div className="f-el">
        <p>Copyright &copy; 2021 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
