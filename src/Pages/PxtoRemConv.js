import React, {useState} from 'react';
import LittlePro from '../Sections/LittlePro';
import Practice from '../Sections/Practice';
import ClickBelow from '../Sections/ClickBelow';
import AboutMe from '../Sections/AboutMe';


const PxtoRemConv = () => {
    const [px, setPx] = useState ('')
    // const [rem, setRem] = useState ('')

    const ChangeText = (e) => {
            setPx(e.target.value)
        }
        const PxtoRem = () => {

        }
        function handlechang() {
            const remvalue = px / 16;
            return remvalue;
        }
          


  return (
    <>
      <div className="PxtoRemConv">
        <div className="container">
            <div className="PxtoRemConv-h1">
                <h1>PX TO REM CONVERTER</h1>
            </div>
            <div className="PxtoRemConv-content">
                <div className="PxtoRemConv-main">
                    <div className="PxtoRemConv-px">
                        <h3>Px</h3>
                        <input type="number" placeholder='16px' value={px} onChange={ChangeText} />
                    </div>
                    <div className="PxtoRemConv-px">
                        <h3>Rem</h3>
                        <input type="number" placeholder='1rem' value={handlechang()} onChange={ChangeText} />
                    </div>
                </div>
                    <div className="PxtoRemConv-par">
                        <p>Calculation based on a root font-size of  <span>16px</span>  pixel.</p>
                        <button onClick={PxtoRem}>Convert</button>
                    </div>
            </div>
        </div>
      </div>
      <LittlePro new2 = 'in-text-conv-block' />
      <Practice />
      <ClickBelow />
      <AboutMe />
    </>
  )
}

export default PxtoRemConv;
