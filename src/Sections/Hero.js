import React from "react";
import { Link } from "react-router-dom";
import Naruto from "../Images/HomePage/naruto 1 1.png";
import Kakashi from '../Images/HomePage/kakashi 1.png'

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main-hero">
            <div className="hero-small-img">
              <img src={Naruto} alt="" />
            </div>
            <div className="hero-content">
              <h1>WELLCOME TO <span id="hero-content-green">YOU</span><span id="hero-content-orange">CAN</span><span id="hero-content-red">USE</span> WEBSITE</h1>
              <h4>Here you can 👀 all my prentice and little projects </h4>
              <p>
                Hello!👋 I'm Mallikarjun, a dedicated front-end developer and UX
                designer with a passion for creating immersive digital
                experiences. I'm delighted to have you visit my website and
                learn more about my work.
              </p>
              <div className="hero-section-main-button">
                <Link to="https://mallikarjun-mathapati.github.io/Mallikarjun.dev.desigr/" target="_blank">
                <div className="hero-content-button ">
                  <p>See More About Me</p> 
                  <img src={Kakashi} alt="" />
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
