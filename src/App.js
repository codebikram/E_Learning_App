import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Faculties from './components/Faculties';
import Main from './components/Main';

function App() {
  // for finding the window width
  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return windowWidth;
  };

  const [isLogIn, setIsLogIn] = useState(false);

  //for sign-in
  const handleLogin = (user, pass) => {
    if (!user && !pass) {
      alert('Please enter username and password');
    } else if (user === 'Cognizant' && pass === 'Hello123') {
      setIsLogIn(true);
    } else {
      alert('Credentials entered are incorrect.');
    }
  };
  return (
    <>
      {!isLogIn ? (
        <Main handleLogin={handleLogin} />
      ) : (
        <NavBar useWindowWidth={useWindowWidth} />
      )}
      {isLogIn && (
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={<Home useWindowWidth={useWindowWidth} />}
            />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="faculties" element={<Faculties />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
