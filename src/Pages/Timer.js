import React, {useEffect, useState} from 'react';
import LittlePro from '../Sections/LittlePro';
import Practice from '../Sections/Practice';
import ClickBelow from '../Sections/ClickBelow';
import AboutMe from '../Sections/AboutMe';


const Timer = () => {
  const [sec, setSec] = useState (0)
  const [min, setMin] = useState (0)
  const [hor, setHor   ] = useState (0)

 var timer
  useEffect(() => {
    timer = setInterval(()=> {
      setSec (sec + 1 )
      if (sec === 59){
        setSec(0)
        setMin(min + 1)
      }
      if (min === 59) {
        setHor(hor + 1)
        setMin(0)
      }
    },1000)
    return ()=> clearInterval(timer)
  })
  const StopBtn = () => {
    clearInterval(timer)
  }
  const ResetBtn = () => {
    setSec(0)
    setMin(0)
    setHor(0)
  }
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
                    <h2>{hor < 10 ? '0' + hor : ''}:{min < 10 ? '0' + min : min}:{sec < 10 ? '0' + sec : sec}</h2>
                    </div>
                    <div className="timer-count">
                    <button onClick={StopBtn}>Stop</button>
                    <button onClick={ResetBtn}>Reset</button>
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
