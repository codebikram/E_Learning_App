import { useState } from 'react';
import carouselDesktopImg from '../../img/Bannerimage_Desktop&Tab.png';
import carouselMoboileImg from '../../img/Bannerimage_Mobile.png';
import './Carousel.css';

const Carousel = ({ useWindowWidth }) => {
  let imagUrl =
    useWindowWidth() >= 580 ? carouselDesktopImg : carouselMoboileImg;
  // const handleTimmer = () => {
  //   setInterval(() => {
  //     if (firstSlide) {
  //       setFirstSlide(false);
  //       setSecondSlide(true);
  //       setThirdSlide(false);
  //     } else if (secondSlide) {
  //       setFirstSlide(false);
  //       setSecondSlide(false);
  //       setThirdSlide(true);
  //     } else if (thirdSlide) {
  //       setFirstSlide(true);
  //       setThirdSlide(false);
  //       setSecondSlide(false);
  //     }
  //   }, 2000);
  // };
  const [firstSlide, setFirstSlide] = useState(true);
  const [secondSlide, setSecondSlide] = useState(false);
  const [thirdSlide, setThirdSlide] = useState(false);
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide container-fluid"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          className={firstSlide ? 'active' : ''}
          onClick={() => {
            setFirstSlide(true);
            setSecondSlide(false);
            setThirdSlide(false);
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          className={secondSlide ? 'active' : ''}
          onClick={() => {
            setFirstSlide(false);
            setSecondSlide(true);
            setThirdSlide(false);
          }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          className={thirdSlide ? 'active' : ''}
          onClick={() => {
            setFirstSlide(false);
            setSecondSlide(false);
            setThirdSlide(true);
          }}
        ></button>
      </div>
      <div className="carousel-inner">
        {firstSlide && (
          <div className="carousel-item">
            <div className="carousel-caption">
              <h5>new way of education</h5>
              <h6>live streaming session</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                eaque suscipit amet provident ipsam deserunt distinctio nemo
                sunt corrupti, optio corporis. Dicta dolor illum magni eum totam
                labore corporis nihil?
              </p>
              <div className="btn-container">
                <button className="btn btn-l">get started</button>
                <button className="btn btn-read">read more</button>
              </div>
            </div>
            <img src={imagUrl} className="carousel-img" alt="banner img" />
          </div>
        )}
        {secondSlide && (
          <div className="carousel-item">
            <div className="carousel-caption">
              <h5>education</h5>
              <h6>live on youtube</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                eaque suscipit amet provident ipsam deserunt distinctio nemo
                sunt corrupti, optio corporis. Dicta dolor illum magni eum totam
                labore corporis nihil? Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Lorem ipsum dolor sit.
              </p>
              <div className="btn-container">
                <button className="btn btn-l">Learn more</button>
              </div>
            </div>
            <img src={imagUrl} className="carousel-img" alt="banner img" />
          </div>
        )}
        {thirdSlide && (
          <div className="carousel-item">
            <div className="carousel-caption">
              <h5>Technology</h5>
              <h6>live session</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                eaque suscipit amet provident ipsam deserunt distinctio nemo
                sunt corrupti, optio corporis. Dicta dolor illum magni eum totam
                labore corporis nihi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <div className="btn-container">
                <button className="btn btn-read">read more</button>
              </div>
            </div>
            <img src={imagUrl} className="carousel-img" alt="banner img" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
