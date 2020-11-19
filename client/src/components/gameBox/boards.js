import React, { useState } from "react";
import WordArt from "react-wordart";
// import Home from "../gameBox/pages/home";

function Board(props) {
  const [score, setScore] = useState(0)
  const [results, setResults] = useState([])
  const drop = e => {
    e.preventDefault(drop);
    console.log('DROPPED TARGET', e.target)
    const letter = e.dataTransfer.getData("letter");
    console.log('letter', letter)
    setResults([...results, letter]);
  }
  const dragOver = e => {
    e.preventDefault(dragOver);
  }

  if (results && props.word) {
    console.log("WORD1", results.sort().join(""), "WORD2", props.word[0].split("").sort().join(""))
    let word1 = results.sort().join("")
    console.log("WORD1", word1)
    let word2 = props.word[0].split("").sort().join("")
    console.log("WORD2", word2)
    if ((word1.length === word2.length) && (word1 !== word2)) {
      return (
        <div className="lost">
          <WordArt text="YOU LOST" theme={"purple"} size={50} />
        </div>
      )
    }
    if (word1 === word2) {
      return (
        <div className="won">
          <WordArt text="YOU WON" theme={"superhero"} size={50} /> 
        </div>
      )
    }
  }
   

  return (
    <div>
      <div
        id={props.id}
        className={props.className}
        onDrop={e => drop(e)}
        onDragOver={e => dragOver(e)}
      >
        {props.children}
        <p>{results}</p>
      </div>
    </div>
  )
}
export default Board;