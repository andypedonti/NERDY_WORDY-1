import React from "react";
import "./home.js";
import DisplayBox from '../components/displayBox';
import GameBox from '../components/gameBox/gameBox';
import "./home.css";

const Home = (props) => {
  return (<div>
    <DisplayBox />
    <GameBox />
  </div>
  );
};

Home.propTypes = {};

export default Home;
