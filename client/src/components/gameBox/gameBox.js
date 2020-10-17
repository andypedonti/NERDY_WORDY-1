import React from 'react';
import Board from "./boards";
import Letter from './letter';


export const ABCs = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z"];




function GameBox() {

 
  return (
   <div className="App">
      <main className="flexbox">
      
        <Board id="board-1" className="board">
         
           <Letter className="card" draggable="true" />
         
          
          
        </Board>

        <Board id="board-2" className="board">
          
            <p id="results"></p>
          
        </Board>
        
      </main>
    </div>
  );
}

export default GameBox;
