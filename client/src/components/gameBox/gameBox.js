import React from "react";
import Board from "./boards";
import Letter from "./letter";
import "./main.css";

function GameBox() {
  return (
   <div className="gameBox">
        <div className="gheader">
          <h1 className="letters">LETTERS&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;SOLUTIONS</h1>
        </div>
      <main className="flexbox">
        <Board id="board-1" className="board">
           <Letter className="letter" draggable="true" />
           <Letter className="letter" draggable="true" />
           <Letter className="letter" draggable="true" />
           <Letter className="letter" draggable="true" />
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
