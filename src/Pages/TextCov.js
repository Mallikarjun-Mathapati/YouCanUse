import React, { useState } from 'react';
import ClearB from '../Images/TextConv/clear button.png';
import UpperB from '../Images/TextConv/UpperCase Button.png';
import LowerB from '../Images/TextConv/Lowercase  button.png';
import CapitalB from '../Images/TextConv/Capital Button.png';
import AkasP from '../Images/TextConv/Akst Preview.png';
// sections
import LittlePro from '../Sections/LittlePro';
import Practice from '../Sections/Practice';
import ClickBelow from '../Sections/ClickBelow';
import AboutMe from '../Sections/AboutMe';

const TextCov = (props) => {
  const [Text, setText] = useState('');
  const [Text2, setText2] = useState('');

  const TextChanger = (e) => {
    setText(e.target.value);
  }
  const ChangeClear = () => {
    setText('');
  }
  const ChangeUpper = () => {
      setText(Text.toUpperCase());
    }
    const ChangeLower = () => {
      setText(Text.toLowerCase());
    }
    const ChangCapitalize = () => {
      setText(Text.charAt(0).toUpperCase() + Text.slice(1));
  
    }
    const ChangCopyText = () => {
          navigator.clipboard.writeText(Text);
          setText2('Copied!');

        }


  return (
    <>
      <div className="Text-conv">
        {/* <div className="container"> */}
          <div className="text-conv-text">
          <h1>Word Converter</h1>
            <textarea name="" id="" placeholder='Paste Here or Type Here' onChange={TextChanger} value={Text}></textarea>
            <p>{Text.split(' ').length} Words and {Text.length} Characters</p>
            <div className="text-conv-buttons">
              <button className="btn-text-conv" onClick={ChangeClear}>Clear
              <img src={ClearB} alt="" />
              </button>
              <button className="btn-text-conv" onClick={ChangeUpper}>Uppercase
              <img src={UpperB} alt="" />
              </button>
              <button className="btn-text-conv" onClick={ChangeLower}>Lowercase
              <img src={LowerB} alt="" />
              </button>
              <button className="btn-text-conv" onClick={ChangCapitalize}>Capitalize
              <img src={CapitalB} alt="" />
              </button>


            </div>
            <div className="text-conv-preview-main">
              <h4>Preview <img src={AkasP} alt="" /></h4>
              <div className="text-conv-priview" placeholder='Preview'>{Text}</div>
              <h6 className='btn-text-copied-p'>{Text2}</h6>
              <button className="btn-text-copy-btn" onClick={ChangCopyText}>Copy Text
              </button>
            </div>
          </div>
        </div>
      {/* </div> */}
      <LittlePro new = 'in-text-conv-block' />
      <Practice />
      <ClickBelow />
      <AboutMe />


    </>
  )
}

export default TextCov;
