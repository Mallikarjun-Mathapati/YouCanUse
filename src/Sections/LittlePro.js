import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Wordlogo from '../Images/LittlePro/word converter.png';
import PxtoRem from '../Images/LittlePro/PXtoREM Cov.png';
import StopWatch from '../Images/LittlePro/Stop Watch.png';
import Calculator from '../Images/LittlePro/Calculator.png';
import TexttoSpeech from '../Images/LittlePro/Text to speech.png';
import TodoList from '../Images/LittlePro/Todo List.png';
import MapFilter from '../Images/LittlePro/MapFilter.png';
const LittlePro = (props) => {
    const [isOpen, setIsopen] = useState (true)
    const isopen = () => {
            setIsopen (!isOpen)
        }

  return (
    <>
  
      <div className="littlepro">
        <div className="littlepro-heading">
            <div className="littlepro-main-img">
               <h1><span id="hero-content-green">YOU</span><span    id="hero-content-orange">CAN</span><span    id="hero-content-red">USE</span>
               </h1>
            </div>
            <h1>LITTLE PROJECTS</h1>
        </div>
        <div className="container">
            <div className="littlepro-main-grid">
                <div className="littlepro-grid">
                    <div className={`littlepro-grid1 ${props.new}`}>
                        <img src={Wordlogo} alt="" />
                        <h2>Word Converter  </h2>
                        <p>Once upon a time, in a land filled with jumbled letters and wild typography, there was a magical creature known as the "text converter." This mischievous sprite had the power to transform text in the blink of an eye, turning ordinary words into whimsical wonders.</p>
                        <Link onClick={isopen} to='/TextCov'><button>If Need Click Me 🫣</button></Link>  
                    </div>
                    <div className={`littlepro-grid1 ${props.new2}`}>
                        <img src={PxtoRem} alt="" />
                        <h2>Px to Rem Converter</h2>
                        <p>As you hand over your pixel values to the converter, you can almost hear it chanting ancient incantations. With a burst of pixelated stardust, your website's dimensions transform, gracefully adapting to any screen size or device. It's as if your pixels have found their true calling in the mystical realm of rem.</p>
                        <Link to='/PxtoRemConv'><button>If Need Click Me 🫣</button></Link>
                    </div>
                    <div className={`littlepro-grid1 ${props.new3}`}>
                        <img src={StopWatch} alt="" />
                        <h2>Stop Watch </h2>
                        <p>The stopwatch is also a master of pranks. Sneak up on a friend, press the start button, and watch as they frantically try to figure out why time seems to be escaping them. It's a small but satisfying way to bring some harmless chaos into the world.</p>
                        <Link to='/Timer'><button>If Need Click Me 🫣</button></Link>
                    </div>
                    <div className= {`littlepro-grid1 ${props.new4}`}>
                        <img src={Calculator} alt="" />
                        <h2>Calculator </h2>
                        <p>In a world filled with numbers and equations, there exists a magical device known as the "calculator." It's like a wizard's wand for arithmetic, ready to conjure answers and solve the most puzzling mathematical riddles.</p>
                        <Link to='/Calculator'><button>If Need Click Me 🫣</button></Link>
                    </div>
                    <div className={`littlepro-grid1 ${props.new5}`}>
                        <img src={TexttoSpeech} alt="" />
                        <h2>Text To Speech </h2>
                        <p>Imagine a magical tool that brings words to life with a touch of wizardry. That's right, we're talking about the magnificent "text-to-speech" converter! This enchanting creation has the power to transform written words into spoken magic, turning dull text into an engaging and hilarious auditory experience.</p>
                        <Link to='/TextToSpeech'><button>If Need Click Me 🫣</button></Link>
                    </div>
                    <div className={`littlepro-grid1 ${props.new6}`}>
                        <img src={TodoList} alt="" />
                        <h2>To Do List </h2>
                        <p>Ah, the mighty "to-do list"! It's like a loyal companion on your journey through the chaos of daily life, helping you conquer tasks and bring order to the madness. But wait, this to-do list has a mischievous personality of its own, ready to inject some laughter into your productivity!</p>
                        <Link to='/Todolists'><button>If Need Click Me 🫣</button></Link>
                    </div>

                    <div className={`littlepro-grid1 ${props.new7}`}>
                        <img src={MapFilter} alt="" />
                        <h2>Map And Filter </h2>
                        <p>Imagine a dynamic duo of functions, swooping in to save the day in the world of programming. Introducing "Map Man" and "Filter Fiend," the comedic crime-fighting team behind the legendary map() and filter() functions!</p>
                        <Link to='/MapFilter'><button>If Need Click Me 🫣</button></Link>
                    </div>
                


                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default LittlePro;
