import React, { useEffect, useState } from 'react';
import Board from "./Boards";
import Card from "./Card";
import "./main.css";
// import Letterflow from "./components/Letterflow";

const ABCs = ["A", "B", "C", "D", "E", "F", "G", "H",
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z"];


const GameBox = () => {

  const [ letter, setLetter ] = useState(
    {
      first: ABCs[Math.floor(Math.random() * ABCs.length)],
      second: ABCs[Math.floor(Math.random() * ABCs.length)]
    })

  useEffect(() => {
    setInterval(() => {
      const randomABCs1 = ABCs[Math.floor(Math.random() * ABCs.length)];
      const randomABCs2 = ABCs[Math.floor(Math.random() * ABCs.length)];
      setLetter({
        first: "ABCs/"+randomABCs1+".png",
        second: "ABCs/"+randomABCs2+".png"
      })
    }, 7000);
  }, [])

  return (
   <div className="App">
      <main className="flexbox">
      
        <Board id="board-1" className="board">
          <Card id="letterB-1" className="card" draggable="true">
            <p><img id="letterB-10" src={letter.first} className="img-background"></img></p>
           </Card>
        
          <Card id="letterB-1" className="card" draggable="true">
            <p><img id="letterB-10" src={letter.second} className="img-background"></img></p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="letterB-2" className="card" draggable="true">
            <p>Results</p>
          </Card>
        </Board>
        
      </main>
    </div>
  );
}

export default GameBox;