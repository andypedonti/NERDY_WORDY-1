import React, { Component } from 'react'



function ScoreBoard({props, state}) {
  return (
    <div>
    <div>
      <h1> {props.username} </h1>
      <p> Score: {props.score} </p>
    </div>
  
    <div
  {...state.ScoreBoard.map ( username =>
    <ScoreBoard
    key={username.id}
    name={username}
    score={username.score}/>
    )  
  }
  >
  </div>
  </div>
)
}
console.log("Hey You!")

export default ScoreBoard;
