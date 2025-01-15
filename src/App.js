
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);  

  const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 3000);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-primary');
  // }
  const toggleMode = (cls)=>{
    //removeBodyClasses();
    //document.body.classList.add('bg-'+cls);
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* Navbar is a Component and the title and aboutText are the props for that component */}
      <Navbar aboutText="About" title="Text Summary" mode={mode} toggleMode={toggleMode} />  
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showalert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
      {/* <About/> */}
      </div>
      </>
  );
}

export default App;
