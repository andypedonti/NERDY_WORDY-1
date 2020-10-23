import React, { Component } from 'react'

function Player(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <p> Score: {props.score} </p>
    </div>
  )
}

render () {
    return <div>
      {this.state.players.map(player =>
        <Player
          key={player.id}
          name={player.name}
          score={player.score}
          />      
      )}
    </div>
}