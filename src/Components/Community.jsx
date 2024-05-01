import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/p02.jpg";
import img2 from "../assets/p03.jpg";

const Community = () => {
  return (
    <div className="carousel">
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Img1" />
          <p className="legend">Web Designing</p>
        </div>
        <div>
          <img src={img2} alt="Img2" />
          <p className="legend">3D Animation</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Community;
