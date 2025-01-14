
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode,setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* Navbar is a Component and the title and aboutText are the props for that component */}
      <Navbar aboutText="About" title="Text Summary" mode={mode} toggleMode={toggleMode} />  
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      {/* <About/> */}
      </div>
      </>
  );
}

export default App;
