import React, { useState } from "react";
import "./home.js";

import "./home.css";
import "../components/startThisShit/start";
import { startSession } from "mongoose";
import StartThisShit from "../components/startThisShit/start";

const Home = (props) => {


    return (
        <div>
            <StartThisShit />
        </div>
    );
};

Home.propTypes = {};

export default Home;
