import React, { useState } from 'react'
import logo from '../Images/Logos/Logos.png'

import LittlePro from '../Sections/LittlePro';
import Practice from '../Sections/Practice';
import ClickBelow from '../Sections/ClickBelow';
import AboutMe from '../Sections/AboutMe';



const Calculator = () => {
  const [cal,setCal ] = useState ('');
  const ClickCal = (e) => {
    setCal(cal.concat(e.target.value))
  }

  const EquClick = ()=> {
    try {
      setCal(eval(cal).toString());
    } catch (error) {
      setCal('Error');
    }
  }
  return (
    <>
     <div className="calculator-heading">
      <h1>CALCULATOR</h1>
     </div>
      <div className="calculator">
        <div className="calculator-main">
          <div className="calculator-logo">
            <img src={logo} alt="" />
          </div>
          <div className="calculator-input">
            <input type="text" value={cal}/>
          </div>
          <div className="calculator-buttons">
            <div className="calculator-button-grid-1">
              <input type="button" value="AC"  onClick={(e)=> setCal("")}/>
              <input type="button" value="DEL" onClick={(e)=> setCal(cal.slice(0, -1))}/>
              <input type="button" value="."onClick={ClickCal}/>
              <input type="button" value="/"onClick={ClickCal}/>
            </div>
            <div className="calculator-button-grid-1">
            <input type="button" value="7" onClick={(e)=> setCal(cal + e.target.value)}/>
              <input type="button" value="8"onClick={ClickCal}/>
              <input type="button" value="9"onClick={ClickCal}/>
              <input type="button" value="×"onClick={ClickCal}/>
            </div>
            <div className="calculator-button-grid-1">
            <input type="button" value="4"onClick={ClickCal}/>
              <input type="button" value="5"onClick={ClickCal}/>
              <input type="button" value="6"onClick={ClickCal}/>
              <input type="button" value="-"onClick={ClickCal}/>
            </div>
            <div className="calculator-button-grid-1">
            <input type="button" value="1"onClick={ClickCal}/>
              <input type="button" value="2"onClick={ClickCal}/>
              <input type="button" value="3"onClick={ClickCal}/>
              <input type="button" value="+"onClick={ClickCal}/>
            </div>
            <div className="calculator-button-grid-1 calculator-sub-grid">
            <input type="button" value="0"onClick={ClickCal}/>
              <input type="button" value="00"onClick={ClickCal}/>
              <input type="button" value="=" onClick={EquClick}/>
            </div>
          </div>
        </div>
      </div>
      <LittlePro new4 = 'in-text-conv-block' />
      <Practice />
      <ClickBelow />
      <AboutMe />

    </>
  )
}

export default Calculator;

