import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>
    {
        let NewTxt=text.toUpperCase();
        setText(NewTxt)
       
    }
    const handleLowClick =()=>
    {
        let NewTxt=text.toLowerCase();
        setText(NewTxt)
       
    }
    const handleOnChange =(event)=>
    {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
      <>
<div className="container">
<h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
    <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to LowerCase</button>
</div>
<div className="container my-4">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} and {text.length} characters</p>
    <p>will take {0.008*text.split(" ").length} to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
