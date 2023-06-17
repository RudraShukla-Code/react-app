import React, { useState } from 'react'

//How to handle event
// How to set state

export default function Textform(props) {

    const uppercasecon = () => {
        //console.log("You click Click on convert to uppercse button " + text)
        let textvalue = text.toUpperCase()
        settext(textvalue)
        props.show("Uppercase converted","Success")
    }

    const lowercasecon = () => {
        //console.log("You click Click on convert button " + text)
        let textvalue = text.toLowerCase()
        settext(textvalue)
    }

    const inversecase = () => {
        //console.log("You click Click on convert button " + text)
        // return a new array of strings
        const arrayStrings = text.split("");

        // reverse the new created array elements
        const reverseArray = arrayStrings.reverse();

        // join all elements of the array into a string
        const joinArray = reverseArray.join("");
        settext(joinArray)
    }

    // copy item
    const handelcopy = () =>
    {
        // console.log('Copied');
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handelextraspces = () =>
    {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
    }

    const valuehandel = (event) => {
        //console.log("on change")

        settext(event.target.value)
    }

    const [text, settext] = useState('Enter text here')
    //to change value of text setText("enter your new text")

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white':'#485227'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={valuehandel} style={{backgroundColor: props.mode === 'dark'?'grey':'white' , color: props.mode === 'dark'?'white':'#485227'}} id="mybox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={uppercasecon}>Convert to uppercase </button>
                <button className="btn btn-primary mx-2" onClick={lowercasecon}>Convert to lowercase </button>
                <button className="btn btn-primary mx-2" onClick={inversecase}>Inverse</button>
                <button className="btn btn-primary mx-2" onClick={handelcopy}>copy</button>
                <button className="btn btn-primary mx-2" onClick={handelextraspces}>spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#485227'}}>
                <h1>Text Summary</h1>
                <p> {text.split(" ").length} Words and {text.length} Characters</p>
                <p>{text.split(" ").length * 0.008} minutes </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something to preview'}</p>
            </div>
        </>
    )
}

