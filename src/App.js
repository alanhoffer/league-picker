
import './App.css';
import './Player.css';
import './Selection.css';
import LeeSin from './image/lee sin.jpg';
import Ignite from './image/ignite.jpg';
import Flash from './image/flash.jpg';
import React, { Component } from 'react';


class Champion extends Component{
  render(){
    return(
      <div className="champion">
        <img src={LeeSin} alt=""/>
      </div>
    )
  }
}

function Player(props) {
  if(props.team === "1") {
  return (
    <div className="Player">
      <div className="Player-avatar">
        <img src={LeeSin} alt="avatar" />
      </div>
      <div className="Player-details">
        <div className="Player-name">
          {props.name}
        </div>
        <div className="Player-spells">
          <div className="Player-spell">
            <img src={Ignite} alt="spell" />
          </div>
          <div className="Player-spell">
            <img src={Flash} alt="spell" />
          </div>
        </div>
      </div>
    </div>

    )
  } else {
    return(
    <div className="Player">
    <div className="Player-details">
      <div className="Player-name">
        {props.name}
      </div>
      <div className="Player-spells">
        <div className="Player-spell">
          <img src={Flash} alt="spell" />
        </div>
        <div className="Player-spell">
          <img src={Ignite} alt="spell" />
        </div>
      </div>
    </div>
    <div className="Player-avatar">
      <img src={LeeSin} alt="avatar" />
    </div>
  </div>
  )};
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      section: "Main"
    }
  }

  toggleSection = (section) => {
    this.setState({
      section: section
    })
  }



  render(){
  if(this.state.section === "Main") {
  return (
    <div className="App">
      <div className="App-header">
        <span>LEAGUE PICKER</span>
      </div>
      <div className="App-body">

          <div className="App-body-left">

            <div className="App-body-left-header">
              <h3>TEAM</h3>
            </div>

            <div className="App-body-left-body">
              <Player name="Player 1" team="1"/>
              <Player name="Player 1" team="1"/>
              <Player name="Player 1" team="1"/>
              <Player name="Player 1" team="1"/>
              <Player name="Player 1" team="1"/>
            </div>
          

          </div>

          <div className="App-body-right">

            <div className="App-body-right-header">
              <h3>ENEMY</h3>
            </div>

            <div className="App-body-right-body">
              <Player name="Player 1" />
              <Player name="Player 1" />
              <Player name="Player 1" />
              <Player name="Player 1" />
              <Player name="Player 1" />
            </div>

          </div>

      </div>
      <div className="App-button">
        <button onClick={() => this.toggleSection("Selection")}>Pick Champion</button>
      </div>
    </div>

  )}
  else if(this.state.section === "Selection") {
    return(
    <div className="App">
      <div className="Selection-header">
        <span>LEAGUE PICKER</span>
      </div>
      <div className="Selection-body" >
        <div className="Selection-body-title"><h3>Selecciona tu Campeon</h3></div>
        <div className="Selection-body-champions">
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
          <Champion />
        </div>
      </div>
      <div className="App-button">
        <button onClick={() => this.toggleSection("Main")}>Back to Select</button>
      </div>
    </div>
    )
  }
};
}

export default App;
