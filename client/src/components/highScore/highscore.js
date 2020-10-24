import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="highscore">
        <Leaderboard/>
      </div>
    );
  }
}
const data = {
  title:'Nerdy Wordy Leaderboard',
  users:[

  ]
};
var count=0;
let Leaderboard = React.createClass({
  getInitialState:function(){
    return(data);
  },
  render: function(){
    return(
      <div className="Leaderboard">
        <Title title={this.state.title}/>
        <List users={this.state.people}/>
      </div>
    )
  }
});
let Title = React.createClass({
  render:function(){
    return(
    <div className="Title">
      {this.props.title}
    </div>
    );
  }
});

let List = React.createClass({
	compareArray: function(a,b) {
		if (a.score < b.score)
			return 1;
		if (a.score > b.score)
			return -1;
		return 0;
	},
	sortArray: function() {
		return this.props.user.sort(this.compareArray);
	},
	render: function() {
		
		let peopleList = this.sortArray();
		
		let people = peopleList.map(function(person, i) {
			return <Username name={prop.Username} Score={person.Score}/>
		});
		
		return (
			<ul>
				{people}

			</ul>
		);
	}
});

let Person = React.createClass({
	render: function() {
		return (
			<li className="Person">
        {count+=1}.
				<div className="Player">{this.props.Username}</div>
				<div className="Score">{this.props.Score}</div>
			</li>
		);
	}
})

export default highScore;
