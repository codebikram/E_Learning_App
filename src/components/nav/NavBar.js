import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoDesktop from '../../img/Logo_Desktop_Tab.png';
import logoMobile from '../../img/Logo_Mobile.png';
import Hamburger from '../../img/Hamburger.png';
import Close from '../../img/Close.png';
import './NavBar.css';

const NavBar = ({ useWindowWidth }) => {
  const location = useLocation();

  let logo = useWindowWidth() >= 580 ? logoDesktop : logoMobile;

  const [collapse, setCollapse] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="img" to="/">
          <img src={logo} alt="e-learning-logo" />
        </Link>
        <button
          className={`navbar-toggler ${collapse && 'btn-close'}`}
          onClick={() => setCollapse(true)}
          type="button"
        >
          <img src={Hamburger} alt="Hamburger icon" />
        </button>
        <button
          className={`navbar-toggler ${!collapse && 'btn-close'}`}
          onClick={() => setCollapse(false)}
          type="button"
        >
          <img src={Close} alt="Close icon" />
        </button>
        <div
          className={
            !collapse ? 'collapse navbar-collapse' : 'navbar-collapse nav-float'
          }
        >
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/' ? 'active' : ''
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/about' ? 'active' : ''
                }`}
                to="about"
              >
                about us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/service' ? 'active' : ''
                }`}
                to="service"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/faculties' ? 'active' : ''
                }`}
                to="faculties"
              >
                faculties
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/portfolio' ? 'active' : ''
                }`}
                to="portfolio"
              >
                protfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/contact' ? 'active' : ''
                }`}
                to="contact"
              >
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
