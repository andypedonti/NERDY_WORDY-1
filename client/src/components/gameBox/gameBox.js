
import React, { useState, useEffect } from "react";
import Board from "./boards";
import Letter from "./letter";
import "./main.css";

function GameBox({ numLetters, setNumLetters, word }) {
  const ABCs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // Create state value for letters
  const [letters, setLetters] = useState([]);

  // Create state value for cur index of word
  const [curIndex, setCurIndex] = useState(0);

  const returnRandomLetters = numLetters => {
    const lettersMap = []
    for (let index = 0; index < numLetters; index++) {
      let letter = ABCs[Math.floor(Math.random() * ABCs.length)]
      lettersMap.push(letter)
    }

    lettersMap.push(word[curIndex]);

    lettersMap.sort(() => .5 - Math.random());

    console.log(lettersMap)
    return lettersMap
  }

  useEffect(() => {
    // set letters set with randomLetters + index 0 of word
    setLetters(returnRandomLetters(numLetters))
  }, [])

  const onDragDrop = (e) => {
    // increment cur index
    e.preventDefault();
    const newcurIndex = curIndex + 1
    setCurIndex(newcurIndex);
    console.log("this", newcurIndex);
    // set letters set with randomLetters + new cur index
    setLetters(returnRandomLetters(setCurIndex))
  }



  return (
    <div className="gameBox">
      <div className="gheader">
        <h1 className="letters">LETTERS&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SOLUTIONS</h1>
      </div>
      <main className="flexbox">
        <Board id="board-1" className="board" >
          {letters.map(i =>
            <Letter className="letter" draggable="true" letter={i} onDragDrop={e => onDragDrop(e)} />)}
        </Board>
        <Board id="board-2" className="result" setNumLetters={setNumLetters} word={word}>
          <p id="results"></p>
        </Board>
      </main>
    </div>
  );
}

export default GameBox;
