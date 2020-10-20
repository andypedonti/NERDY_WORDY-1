import React, { useState } from "react";

function Board(props) {
  const [results, setResults] = useState([])
  

  const drop = e => {
    e.preventDefault();
    console.log('DROPPED TARGET', e.target)
    const letter = e.dataTransfer.getData("letter");

    console.log('letter', letter)
    
    setResults([ ...results, letter ]);
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

