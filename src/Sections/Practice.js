import React from "react";
import { Link } from "react-router-dom";
import Increment from '../Images/LittlePro/Increment & Decrement.png';
import DigitalClock from '../Images/LittlePro/Digital Clock.png';
import LocalTime from '../Images/LittlePro/Local Clock.png';

const Practice = () => {
  return (
    <>
      <div className="practice">
        <div className="littlepro-heading">
          <div className="littlepro-main-img">
            <h1>
              <span id="hero-content-green">YOU</span>
              <span id="hero-content-orange">CAN</span>
              <span id="hero-content-red">USE</span>
            </h1>
          </div>
          <h1>PRACTICES</h1>
        </div>
        <div className="container">
          <div className="littlepro-main-grid">
            <div className="littlepro-grid">
              <div className="littlepro-grid1">
                <img src={Increment} alt="" />
                <h2>Increment & Decrement </h2>
                <p>
                Imagine a button that possesses the power to both raise and lower the numerical universe with a single click. Behold, the magnificent "Increment & Decrement on Click" feature! With its whimsical charm and mathematical magic, this little button brings a playful twist to the world of numbers.
                </p>
                <Link to="https://codepen.io/Mallikarjun-Ma/pen/zYaMNeV" target="_blank">
                  <button>If Need Click Me 🫣</button>
                </Link>
              </div>
              <div className="littlepro-grid1">
                <img src={DigitalClock} alt="" />
                <h2>Digital Clock</h2>
                <p>
                Imagine a timekeeping wizard that resides in the digital realm, tirelessly counting the seconds, minutes, and hours with unwavering dedication. Behold, the magnificent "digital clock"! This whimsical contraption brings order to the chaotic passage of time while sprinkling a dash of humor into your everyday routines.
                </p>
                <Link to="https://codepen.io/Mallikarjun-Ma/pen/oNPMLBg" target="_blcqk">
                  <button>If Need Click Me 🫣</button>
                </Link>
              </div>
              <div className="littlepro-grid1">
                <img src={LocalTime} alt="" />
                <h2>Local Time Clock</h2>
                <p>
                Ah, the mighty "to-do list"! It's like a loyal companion on your journey through the chaos of daily life, helping you conquer tasks and bring order to the madness. But wait, this to-do list has a mischievous personality of its own, ready to inject some laughter into your productivity!
                </p>
                <Link to="/">
                  <button>If Need Click Me 🫣</button>
                </Link>
              </div>
   
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practice;
