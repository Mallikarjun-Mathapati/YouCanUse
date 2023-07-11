import React, { useState } from 'react';

import LittlePro from '../Sections/LittlePro';
import Practice from '../Sections/Practice';
import ClickBelow from '../Sections/ClickBelow';
import AboutMe from '../Sections/AboutMe';


const TextToSpeech = () => {
    const [text, setText] = useState ('')
    const speech = window.speechSynthesis;

    const SpeachAll = () => {
        if (text !== "") {
            const speech1 = new SpeechSynthesisUtterance(text);
            speech.speak(speech1);
        }
    }
    const StopSpeech =()=> {
        speech.cancel();
    }
    const ClearAll = () => {
        setText('')
        speech.cancel();
    }

  return (
    <>
        <div className="text-to-speech">
            <div className="text-to-speech-main">
                <div className="text-to-speech-textarea">
                <textarea type='text' onChange={(e)=> setText(e.target.value)} value={text} placeholder='Text Here To Speech'></textarea>
                </div>
                <br />
                <div className="text-to-speech-buttons">
                <button onClick={SpeachAll}>Speak</button>
                <button onClick={StopSpeech}>Stop Speak</button>
                <button onClick={ClearAll}>Clear All</button>
                </div>
            </div>
        </div>
        <LittlePro new5 = 'in-text-conv-block' />
      <Practice />
      <ClickBelow />
      <AboutMe />
    </>
  );
};

export default TextToSpeech;
