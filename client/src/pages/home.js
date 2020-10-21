import React, { useState } from "react";
import "./home.js";
import DisplayBox from '../components/displayBox';
import GameBox from '../components/gameBox/gameBox';
import "./home.css";

const Home = (props) => {

  const [ numLetters, setNumLetters] = useState(5)

  return (
  <div>
    <DisplayBox />
    <GameBox numLetters={numLetters} setNumLetters={setNumLetters}/>
  </div>
  );
};

Home.propTypes = {};

export default Home;
