import React, { useState } from "react";
import "./home.js";
import DisplayBox from '../components/displayBox';
import GameBox from '../components/gameBox/gameBox';
import "./home.css";
import ScoreBoard from "../components/scoreBoard/scoreboard.js";


//NEEDS <SCOREBOARD/>//
const Home = (props) => {

  const [ numLetters, setNumLetters] = useState(5)
  var randomWords = require('random-words');
  const word = randomWords({ exactly: 1, maxLength: 4, formatter: (word) => word.toUpperCase() });
  return (
  <div>
    <DisplayBox word={word}/>
    <GameBox numLetters={numLetters} setNumLetters={setNumLetters} word={word}/>
    
  </div>
  );
};

Home.propTypes = {};

export default Home;
