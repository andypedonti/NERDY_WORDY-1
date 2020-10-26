import React, { useState, useEffect } from "react";
import Board from "./boards";
import Letter from "./letter";
import "./main.css";
function GameBox({ numLetters, setNumLetters, word, setWord, getARandomWord }) {
  useEffect(() => {
    returnRandomLetters(numLetters)
  }, [numLetters])
  const ABCs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const [lettersToMap, setLettersToMap] = useState([])
  const returnRandomLetters = numLetters => {
    const lettersMap = []
    for (let index = 0; index < 100; index++) {
      let letter = ABCs[Math.floor(Math.random() * ABCs.length)]
      lettersMap.push(letter)
    }
    setLettersToMap(lettersMap)
  }
  const resetGame = () => {
    returnRandomLetters()
    // getARandomWord()
  }
  return (
    <div className="gameBox">
      <button onClick={resetGame}>Reset Game</button>
      <div className="gheader">
        <h1 className="letters">LETTERS&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SOLUTIONS</h1>
      </div>
      <main className="flexbox">
        <Board id="board-1" className="board" style={{ marginLeft: "20px" }}>
          {lettersToMap.map((letter, i) =>
            <Letter className="letter" draggable="true" key={i} letter={letter} />)}
        </Board>
        <Board id="board-2" className="result" setNumLetters={setNumLetters} word={word} lettersToMap={lettersToMap} >
          <p id="results"></p>
        </Board>
      </main>
    </div>
  );
}
export default GameBox;