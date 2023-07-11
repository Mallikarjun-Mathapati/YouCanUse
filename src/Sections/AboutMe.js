import React from "react";
import Jiraiya from "../Images/AboutMe/Jiraiya.png";
import Zoro from "../Images/AboutMe/zoro.png";

const AboutMe = () => {
  return (
    <>
      <div className="about-me">
        <div className="about-heading">
          <div className="about-main-content">
            <h1>
              <span id="hero-content-green">LITTLE </span>
              <span id="hero-content-orange">BIT </span>
              ABOUT
              <span id="hero-content-red"> ME </span>
            </h1>
            <p>I guess ,’You are not go to read this’ but It’s ‘Ok’</p>
          </div>
          <div className="about-main-img">
            <img src={Jiraiya} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="about-me-main">
            <div className="about-me-about-me">
              <p>
                Hello! My name is Mallikarjun, and I am passionate about
                front-end development and UX design. With a strong background in
                these fields, I strive to create visually appealing and
                user-friendly experiences for websites and applications.
              </p>
              <p>
                As a front-end developer, I specialize in crafting the
                client-side of websites. I possess expertise in HTML, CSS,
                JavaScript, and React.js enabling me to build responsive and
                interactive interfaces. I stay updated with the latest web
                technologies and frameworks to deliver modern and efficient
                solutions.
              </p>
              <p>
              In addition to my development skills, I also have a keen eye for user experience design. I believe that a seamless and intuitive user interface plays a vital role in creating a positive interaction between users and digital products. By conducting user research, wireframing, and prototyping, I ensure that the end-users' needs and expectations are met.

              </p>
              <p>
                Throughout my career, I have had the opportunity to work on
                various projects, ranging from small business websites to
                complex web applications. I enjoy collaborating with
                cross-functional teams and translating their ideas into visually
                appealing and functional designs.
              </p>
            </div>
            <div className="about-me-zoro-img">
              <img src={Zoro} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
