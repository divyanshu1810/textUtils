import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log('UpperCaseClicked ');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = () =>{
        // console.log('LowerCaseClicked ');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick = () =>{
        // console.log('ClearTextClicked ');
        let newText = "";
        props.showAlert("Text Cleared!","success");
        setText(newText);
    }
    const HandleOnChange = (event) =>{
        // console.log('UpperCaseClicked');
        setText(event.target.value)
    }

    const handleCopy = () => {
        // console.log('Text Copied');
        // let text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied! to Clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    }

    const [text,setText] = useState('');
        // setText('Enter the Story');
        
    return <>
    <div className='container' style={{color:props.mode ==='light'?'#042743':'white'}}>
    <h1 className='mb-4'>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='light'?'white':'#13466e' , color:props.mode ==='light'?'#042743':'white'}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Covert to Uppercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Covert to Lowercase</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode ==='light'?'#042743':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
    </div>
    </>;
}

