import React from 'react'

export default function About(props) {
document.title = 'MyTextEditor-About';

    let myStyle = {
        color: props.mode === 'dark'? 'white' :'#212529',
        backgroundColor: props.mode === 'dark'? '#212529':'white',
        border: '1px solid',
        borderColor: props.mode ==='dark'? 'white':'black'
    }
  return (
    <div className='container my-5' style={{color: props.mode === 'dark'? 'white' :'#212529', backgroundColor: props.mode === 'dark'? '#212529':'white',}}>
        <h2>About us</h2>
        <div className="accordion my-3" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    MyTextApp gives you a way to analyze your text quickly and efficiently. Be it word count, character count or changing it to uppercase, lowercase, space removal, copy text or etc.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   MyTextApp is a free character counter tool that provides instant character count and word count statistics for a given text. It reports the number of words and character. Thus, it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item"> 
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div> 
        {/* <button type='button' onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button> */}
    </div>
  )
}
