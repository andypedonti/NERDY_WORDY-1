import React from 'react';
import Board from "./Boards";
import Letter from './letter';
import "./main.css";



export const ABCs = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z"];

function GameBox() {
  return (
   <div className="gameBox">
      <main className="flexbox">
        <Board id="board-1" className="board">
           <Letter className="letter" draggable="true" />          
        </Board>
        <Board id="board-2" className="result">
            <p id="results"></p>
        </Board>
      </main>
    </div>
  );
}

export default GameBox;
