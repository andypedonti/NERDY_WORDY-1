import React, { useState } from "react";

function Board(props) {
  const [results, setResults] = useState([])
  
    const compareWords = (word, resultsArray) => {
      word.split().forEach(i => {
          if (resultsArray.indexOf(i) === -1) {
          return console.log('fail')
          }
          return console.log("win")
    })
  }

  

  const drop = e => {
    e.preventDefault();
    console.log('DROPPED TARGET', e.target)
    const letter = e.dataTransfer.getData("letter");

    console.log('letter', letter)
    
    setResults([ ...results, letter ]);
    props.setNumLetters(Math.floor(Math.random() * 80))
    }
 
  const dragOver = e => {
    e.preventDefault();
  }

  console.log("RESULTS", results)

  //compareWords(props.word, results)

  return(
    <div>
      <div
      id={props.id}
      className={props.className}
        onDrop={e=>drop(e)}
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

