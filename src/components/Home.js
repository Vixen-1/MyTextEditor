import {useState} from 'react'

//learning states
 
export default function Home(props) {

  document.title = 'MyTextEditor';

  const handleUcClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("!! text is converted to uppercase", "success")
  }

  const handleLcClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("!! text is converted to lowercase", "success")
  }

  const handleExtraSpace = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert("!! extra spaces has been removed", "success")
  }
  
  const handleCopyClick = ()=> {
    const text = document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("!! text is copied", "success")
  }

  const handleClearClick = ()=> {
    let newText = "";
    setText(newText)
    props.showAlert("!! text is cleared", "success")
  }
  // on change event ko listen krna imp hota hai otherwise hum type nahi karpate
  const handleOnChange = (event) => {
        setText(event.target.value)
  }

  const [text, setText] = useState("")

  const words = text.split(" ").length;
  const characters = text.length;
  // // const summary = "Words :" + words +", Characters : " + characters;

  return (
    <>
        <div className="container my-4" style={{ color: props.mode ==='light'? 'black' : 'white'}}>
          <label htmlFor="myBox" className='form-label' ><h1>{props.heading}</h1></label>
          <textarea className='form-control' style={{ background: props.mode ==='light'? 'white' : 'black', color: props.mode ==='light'? 'black' : 'white'}} value={text} placeholder="Enter the text" onChange={handleOnChange} id="mybox" rows="8"></textarea>
         
          <button className="btn btn-primary m-2" onClick={handleUcClick}>Convert to uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLcClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick}>copy text</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
        </div>

        <div className="container my-3" style={{color: props.mode ==='light'? 'black' : 'white'}}>
        <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>YOUR TEXT SUMMARY</h2>
        <div> 
          <span>words : {words}</span><br />
          <span>Characters : {characters}</span>
        </div>
          {/* <textarea id='myBox' style={{ background: props.mode ==='light'? 'white' : 'black', color: props.mode ==='light'? 'black' : 'white'}} rows= "3" cols ="30" value={summary}></textarea>           */}
        </div>
    </>
  )
}
