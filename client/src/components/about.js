import React from 'react';

const style = { width: "100px" }
const aboutStyle = { color: "white", fontWeight: "900", fontSize: "3vw", marginRight: "auto", marginLeft: "auto", marginTop: "250px" }

const About = () => (
    <div className="text-center">
        <div className="container">
            <div style={aboutStyle}>
                <h1>Nerdy_Wordy Team</h1>
                <p>
                    The Nerdy_Wordy Team is a cohort from the Chapel Hill UNC Coding Bootcamp.
                    Our team created a Toddler - Elementary school game, that promotes visual and kinesthetic
                    learning development.
                    In this first draft and inital concept we have the React-dnd utilites and
                    letters cascading downward for the user to drag and drop.
        </p>
                <h3>THE TEAM</h3>
                <p>
                    <label for="#borjan"><a href="https://mrbusiness87.github.io/My-Portfolio/#about" target="_blank" rel="noopener noreferrer">Borjan Bartula</a></label>
                    <img src={require("../../src/bb.png")} style={style} id="borjan" />&emsp;&emsp;
            <img src={require("../../src/cb.png")} style={style} /><a href="https://ctbeam.github.io/My-Portfolio/#about" target="_blank" rel="noopener noreferrer">Cameron Beam</a>
                    <br />
                    <label for="#andy"><a href="https://github.com/andypedonti/andypedonti.github.io" target="_blank" rel="noopener noreferrer">Andy Pedonti</a></label>
                    <img src={require("../../src/ap.png")} style={style} id="andy" />&emsp;&emsp;
            <img src={require("../../src/kw.png")} style={style} /><a href="https://kobac44.github.io/Portfolio2/" target="_blank" rel="noopener noreferrer">Kobie Watkins</a>
                </p>
            </div>
        </div>
    </div>

)
export default About;
