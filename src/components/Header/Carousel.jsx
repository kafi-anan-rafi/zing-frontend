import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/banner_1.jpg";
import banner2 from "../../assets/banner_2.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-full mt-5 rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img alt="ab" src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform  -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="#slide4" className="btn btn-circle">
            ❮
          </Link>
          <Link to="#slide2" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img alt="ab" src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="#slide1" className="btn btn-circle">
            ❮
          </Link>
          <Link to="#slide3" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img alt="ab" src={banner1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="#slide2" className="btn btn-circle">
            ❮
          </Link>
          <Link to="#slide4" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img alt="ab" src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link to="#slide3" className="btn btn-circle">
            ❮
          </Link>
          <Link to="#slide1" className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
