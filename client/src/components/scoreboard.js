import React from "react";

// context from provider
import { MyContext } from "./App.js";

class Scoreboard extends React.Component {
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div className="scoreboard-wrapper">
            <div className="scoreboard">
              {context.state.isInGameLoop ? (
                <h2 className="scoreboard-score animated fadeIn">
                  Score: <br /> {context.state.score}
                </h2>
              ) : null}

              {/* <h2 className="timer">Time : {context.state.time}</h2> */}

              {!context.state.isInGameLoop ? (
                <p className="scoreboard-instructions animated fadeIn">
                  Spell The Word Displayed Above! 
                </p>
              ) : null}

              {!context.state.isInGameLoop ? (
                <button
                  className="scoreboard-start-button animated fadeInUp"
                  onClick={context.startGameloop}
                >
                  Start
                </button>
              ) : (

              )}
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
export default Scoreboard;