import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
        //console.log("UpperCase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase!","success");

    }
    const handlelowclick = ()=>{
        //console.log("Lowercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase!","success");
    }
    const handlecopy =()=>{
      var text = document.getElementById("textarea")
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showalert("Text Copied","success");
    }
    const handleemailclick = ()=>{
      //console.log("Lowercase was clicked" +text);
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
    // Find all matches
      let emails = text.match(emailRegex);
      let commaSeparatedEmails = '';
      if(emails.length>0)
      {
        commaSeparatedEmails = emails.join(", ");
      }
      //let newText = text.toLowerCase();
      setEmail(commaSeparatedEmails);
      props.showalert("Emails Extracted","success");

  }
    const handleclearclick = ()=>{
        //console.log("Lowercase was clicked" +text);
        let newText = '';
        setText(newText);
        props.showalert("Cleared Data","success");

    }
    const handleOnchange = (event)=>{
        //console.log("Handle Onchange");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    const [emails,setEmail] = useState('Currently No emails Extracted');
    //  setText("Enter valid text here");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black' }}>
        <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="textarea" rows="10" style={{backgroundColor:props.mode==='dark'?'#4c4d5a':'white', color:props.mode==='dark'?'white':'black' }} ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handlelowclick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-danger m-1" onClick={handleclearclick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-warning m-1" onClick={handleemailclick}>Extract Emails</button>
      <button disabled={text.length===0} className="btn btn-info m-1" onClick={handlecopy}>Copy Text</button>
    </div>
    <div className='container my-2' style={{color:props.mode==='dark'?'white':'black' }}>
        <h1>Your text Summary</h1>
        <p>{text.split(/\s+/ ).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        <h2>Emails Preview</h2>
        <p>{emails}</p>
    </div>
    </>
  )
}
