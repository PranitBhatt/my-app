
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      {/* Navbar is a Component and the title and aboutText are the props for that component */}
      <Navbar aboutText="About" title="Text Utilites" />  
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze"/>
      </div>
      </>
  );
}

export default App;
