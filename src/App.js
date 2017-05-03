import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import $ from 'jquery';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="welcome">Play Connect Four!</h2>
        </div>
        <p className="App-intro">
          Simply click a white egg to slide your piece down! Good Luck :)
        </p>
        
        

      </div>
    );
  }
}





export default App;
