import React, { useState } from 'react';

const Letter = props => {
  const ABCs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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
  }
  // console.log("DRAGOVER: ", dragOver)

  const dragLeave = e => {
    e.preventDefault();
  }
  // console.log("DRAGLEAVE: ", dragLeave)

  const dragEnter = e => {
    e.preventDefault();
  }
  // console.log("DRAGENTER: ", dragEnter)

  const DropZone = e => {
    const letter = e.dataTransfer.letter;
    e.preventDefault();
  }
  // console.log("DROPZONE: ", letter, DropZone)
    
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