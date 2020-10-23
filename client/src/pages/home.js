import React, { useEffect, useState } from "react";
import "./home.js";
import DisplayBox from '../components/displayBox';
import GameBox from '../components/gameBox/gameBox';
import "./home.css";
import { useStoreContext } from "../store/store.js";
import { SET_WORD } from "../store/actions.js";

var randomWords = require('random-words');

const Home = (props) => {
  const [state, dispatch] = useStoreContext();
  const [numLetters, setNumLetters] = useState(4)
  useEffect(() => {
    dispatch({ type: SET_WORD, word: randomWords({ exactly: 1, maxLength: 4, formatter: (word) => word.toUpperCase() })[0] })
  }, [])
  // adding this array alarms React two only run when things inside of it change


  return (
    <div>
      {/* <button>START</button> */}
      <DisplayBox word={state.word} />
      {state.word && <GameBox numLetters={numLetters} setNumLetters={setNumLetters} word={state.word} />}
    </div>
  );

};

Home.propTypes = {};

export default Home;
