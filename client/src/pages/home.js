import React, { useState, useEffect } from "react";
import "./home.js";
import DisplayBox from '../components/displayBox';
import GameBox from '../components/gameBox/gameBox';
import randomWords from 'random-words'
import "./home.css";
const Home = (props) => {
  const [numLetters, setNumLetters] = useState(5)
  const [word, setWord] = useState("")
  var randomWords = require('random-words');
  const getARandomWord = () => {
    setWord(randomWords(({ exactly: 1, maxLength: 4, formatter: (word) => word.toUpperCase() })))
  }
  useEffect(() => {
    getARandomWord()
  }, [])
  return (
    <div>
      <DisplayBox word={word} />
      <GameBox numLetters={numLetters} setNumLetters={setNumLetters} word={word} setWord={setWord} getARandomWord={getARandomWord} />
    </div>
  );
};
Home.propTypes = {};
export default Home;