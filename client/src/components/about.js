import React from 'react';

const style = { width: "100px", height: "100px" }
const About = () => (
    <div>
        <h1>Nerdy_Wordy Team</h1>
        <p>
            The Nerdy_Wordy Team is a cohort from the Chapel Hill UNC Coding Bootcamp.
            This team is created and developed an Toddler - Elementary school game that promotes visual and kinesthetic
            learning development.
            In this first draft and inital concept we have the React-dnd utilites and
            letters cascading downward for the user to drag and drop.
        </p>
        <h3>THE TEAM</h3>
        <p>
            {/* Borjan Bartula <img src={require("./")} style={style}></img>
            Cameron Beam <img src={require("cb.jpg")} style={style}></img>
            {/* Andy Pedonti <img src={require("ap.jpg")} style={style}></img> */}
            Kobie Watkins <img src={require("kw.jpg")} style={style}></img>
        </p>
    </div>
)
export default About;