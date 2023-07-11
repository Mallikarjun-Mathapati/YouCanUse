import React from 'react';
import LittlePro from '../Sections/LittlePro';
import Practice from '../Sections/Practice';
import ClickBelow from '../Sections/ClickBelow';
import AboutMe from '../Sections/AboutMe';


const Timer = () => {
  return (
    <>
    <div className="timer-heading">
        <h1>STOP WATCH</h1>
    </div>
      <div className="timer">
        <div className="timer-main">
            <div className="container">
                <div className="timer-sub-main">
                    <div className="timer-count">
                    <h2>00:00:00</h2>
                    </div>
                    <div className="timer-count">
                    <button>Stop</button>
                    <button>Reset</button>
                    </div>
                </div>
            </div>
            </div>
      </div>
      <LittlePro new3 = 'in-text-conv-block' />
      <Practice />
      <ClickBelow />
      <AboutMe />
    </>
  );
}

export default Timer;
