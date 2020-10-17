import React, { useState } from 'react';
import { ABCs } from './gameBox.js';

const Letter = props => {
    const [ letter, setLetter ] = useState(
        ABCs[Math.floor(Math.random() * ABCs.length)]);

        const dragStart = e => {
            const target = e.target;

     e.dataTransfer.setData("letter", letter);

     setTimeout(() => {
        target.style.display = "none";
     }, 0);

    }

    const dragOver = e => {
        e.preventDefault();
        console.log()
    }

    const dragLeave = e => {
        e.preventDefault();
        console.log(dragLeave);
    }

    const dragEnter = e => {
    console.log("drag")
        e.preventDefault();
    }

    const DropZone = e => {
        e.preventDefault();
        const letter = e.dataTransfer.letter;
        console.log(letter, DropZone);  
    }
    
    return (
        <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        // onClick instad of onDrag
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        onDragEnter={dragEnter}
        onDrop={DropZone}
        >
            <p><img id="letterB-10" data-letter={letter} src={`ABCs/${letter}.png`} className="img-background"></img></p>
        </div>
    )
}

export default Letter;