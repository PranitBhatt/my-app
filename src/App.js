
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      {/* Navbar is a Component and the title and aboutText are the props for that component */}
      <Navbar aboutText="About" title="Text Summary" />  
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      {/* <About/> */}
      </div>
      </>
  );
}

export default App;
