
import React, { useEffect } from "react";
import Board from "./boards";
import Letter from "./letter";
import "./main.css";

function GameBox({ numLetters, setNumLetters }) {

  const ABCs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
 
  const returnRandomLetters = numLetters => {
    const lettersMap = []
    for (let index = 0; index < numLetters; index++) {
      let letter = ABCs[Math.floor(Math.random() * ABCs.length)]
      lettersMap.push(letter)
    }
    console.log(lettersMap)
    return lettersMap
  }

  return (
   <div className="gameBox">
        <div className="gheader">
          <h1 className="letters">LETTERS&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SOLUTIONS</h1>
        </div>
      <main className="flexbox">
        <Board id="board-1" className="board" >
        
          { returnRandomLetters(numLetters).map(i => 
          <Letter className="letter" draggable="true" letter={i} />)}
        </Board>
        <Board id="board-2" className="result" setNumLetters={setNumLetters}>
            <p id="results"></p>
        </Board>
      </main>
    </div>
  );
}

export default GameBox;
