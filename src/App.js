
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import TextCov from './Pages/TextCov';
import PxtoRemConv from './Pages/PxtoRemConv';
import Timer from './Pages/Timer';
import MapFilter from './Pages/MapFilter';
import Calculator from './Pages/Calculator';
import Todolists from './Pages/Todolists';
import TextToSpeech from './Pages/TextToSpeech';
import IncrementD from './Pages/IncrementD';
import { Route, Routes } from 'react-router-dom';

import Footer from './Sections/Footer';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route exact path='/' Component={Home} /> 
      <Route exact path='/TextCov' Component={TextCov} /> 
      <Route exact path='/PxtoRemConv' Component={PxtoRemConv} />
      <Route exact path='/Timer' Component={Timer}/>
      <Route exact path='/MapFilter' Component={MapFilter}/>
      <Route exact path='/Calculator' Component={Calculator}/>
      <Route exact path='/Todolists' Component={Todolists}/>
      <Route exact path='/TextToSpeech' Component = {TextToSpeech} />
      <Route exact path='/IncrementD' Component = {IncrementD} />
    </Routes>
    <Footer></Footer>
    
    </>
  );
}

export default App;
