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
  people:[
    {
      player: '',
      mmr:9109,
    },
    {
      player: '',
      mmr:8967,
    },
    {
      player: '',
      mmr:8713,
    },
    {
      player: '',
      mmr:8519,
    },
    {
      player: '',
      mmr:8473,
    },
    {
      player: '',
      mmr:8441,
    },
    {
      player: '',
      mmr:8422,
    },
    {
      player: '',
      mmr:8343,
    },
    {
      player: '',
      mmr:8324,
    },
    {
      player: '',
      mmr:8317,
    },
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
        <List people={this.state.people}/>
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
		if (a.mmr < b.mmr)
			return 1;
		if (a.mmr > b.mmr)
			return -1;
		return 0;
	},
	sortArray: function() {
		return this.props.people.sort(this.compareArray);
	},
	render: function() {
		
		let peopleList = this.sortArray();
		
		let people = peopleList.map(function(person, i) {
			return <Username name={prop.Username} mmr={person.mmr}/>
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
				<div className="mmr">{this.props.Username}</div>
			</li>
		);
	}
})

export default highScore;
