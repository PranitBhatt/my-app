import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        console.log("UpperCase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handlelowclick = ()=>{
        console.log("Lowercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleOnchange = (event)=>{
        console.log("Handle Onchange");
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here');
    //  setText("Enter valid text here");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="textarea" rows="10" ></textarea>
      </div>
      <button className="btn btn-primary m-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handlelowclick}>Convert to LowerCase</button>
      
    </div>
  )
}
