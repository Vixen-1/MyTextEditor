import React,{useState} from 'react'

//learning states
 
export default function Home(props) {

  document.title = 'MyTextEditor-home';

  const handleUcClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text is converted to uppercase", "success")
  }

  const handleLcClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text is converted to lowercase", "success")
  }

  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("Extra spaces has been removed", "success")
  }
  
  const handleCopyClick = ()=> {
    const text = document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text is copied", "success")
  }

  const handleClearClick = ()=> {
    let newText = "";
    setText(newText)
    props.showAlert("Text is cleared", "success")
  }
  // on change event ko listen krna imp hota hai otherwise hum type nahi karpate
  const handleOnChange = (event) => {
        setText(event.target.value)
  }

  // phal pahla git upload
  const [text, setText] = useState("")

  const words = text.split(" ").filter((element)=>{return element.length!==0}).length;
  const characters = text.length;
  const time = 0.008 * text.split(" ").filter((element) => {return element.length!==0}).length;
  // // const summary = "Words :" + words +", Characters : " + characters;

  return (
    <>
        <div className="container my-4" style={{ color: props.mode ==='light'? 'black' : 'white'}}>
          <label htmlFor="myBox" className='form-label' ><h1 className="my-2">{props.heading}</h1></label>
          <textarea className='form-control' style={{ background: props.mode ==='light'? 'white' : 'black', color: props.mode ==='light'? 'black' : 'white'}} value={text} placeholder="Enter the text" onChange={handleOnChange} id="mybox" rows="8"></textarea>
         
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUcClick}>Convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLcClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>copy text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>clear text</button>
        </div>

        <div className="container my-3" style={{color: props.mode ==='light'? 'black' : 'white'}}>
          <h2>YOUR TEXT SUMMARY</h2>
          <div> 
            <span>words : {words}</span><br />
            <span>Characters : {characters}</span><br />
            <span>Minutes read : {time}</span>
          </div>
          <h2 className="my-3">PREVIEW</h2>
          <div> 
            <p>{text.length>0?text:"Nothing to preview"}</p>
          </div>
        </div>
    </>
  )
}
