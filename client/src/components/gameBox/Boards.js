import React, { useState } from "react";



function Board(props) {
  const [results, setResults] = useState('')
  let landZone = null;

  const drop = e => {
    e.preventDefault();
    console.log('DROPPED TARGET', e.target)
    const letter = e.dataTransfer.getData("letter");

    console.log('letter', letter)
    landZone = landZone == null ? letter : landZone + letter;
    setResults(landZone)
    }
 
  const dragOver = e => {
    e.preventDefault();
  }

  console.log("RESULTS", results)

  return(
    <div>
      <div
      id={props.id}
      className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        >
        { props.children }
          <p>{results}</p>
          {/* <p>{results2}</p> */}

      </div>
    </div>
  )
}

export default Board;

