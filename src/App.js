import React, { Component } from 'react';
import logo from './logo.svg';
import EditableTicker from './EditableTicker/EditableTicker'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Basic Number Ticker</div>
        <EditableTicker />

        <div>Basic Time Ticker</div>
        <div /*style={{display: 'inline-block'}}*/>
          <EditableTicker style={{display: 'inline-block'}}/> <span>:</span> <EditableTicker />
        </div>
      </div>
    );
  }
}

export default App;
