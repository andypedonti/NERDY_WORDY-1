import React from 'react';

const Letter = props => {

  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("letter", props.letter);
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
    //const letter = e.dataTransfer.letter;
    e.preventDefault();
    console.log("DROPZONE: ", props.letter, DropZone)
    props.setNumLetters(Math.floor(Math.random() * 6))
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
      onDrop={e=>DropZone(e)}
      >
      <p><img id="letterB-10" data-letter={props.letter} src={`ABCs/${props.letter}.png`} className="img-background"></img></p>
    </div>
  )
}

export default Letter;