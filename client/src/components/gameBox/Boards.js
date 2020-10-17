import React, { useState } from "react";



function Board(props) {
    const [results, setResults] = useState('')
    let landZone = null;

    const drop = e => {
        e.preventDefault();
        console.log('DROPPED TARGET', e.target)
        const letter = e.dataTransfer.getData("letter");

        //const letterB = document.getElementById(letterB_id);
       console.log('letter', letter)
        // pushes back out to browser
        // e.target.appendChild(letter);

        // .png location from the file extention and the length of the letter
        //const letterIndex = letter.src.indexOf(".png") -1
        //const ltr = letter.src.substring(letterIndex, letterIndex+1);

        // Ternary Operator **** big learning curve (condition statement)
        // if landzone equal null then assign letterB.value else landZone concat letterB value 
        landZone = landZone == null ? letter : landZone + letter;

        // document.getElementById("results").innerHTML = landZone;
        setResults(landZone)
    }

    const dragOver = e => {
        e.preventDefault();
    }

    const handledragEnter = e => {
        console.log("Entering drag..")
    }

    return(
        <div
        id={props.id}
        className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
            // onDragEnter={dragging?handledragEnter:null}
            >
            { props.children }
            <div>{results}</div>
        </div>
    )
}

export default Board;

