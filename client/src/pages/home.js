import React, { useState } from "react";
import "./home.js";

import "./home.css";
import ScoreBoard from "../components/scoreBoard/scoreboard.js";
=======
import "../components/startThisShit/start";
import { startSession } from "mongoose";
import StartThisShit from "../components/startThisShit/start";


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
=======

    return (
        <div>
            <StartThisShit />
        </div>
    );

};

Home.propTypes = {};

export default Home;
