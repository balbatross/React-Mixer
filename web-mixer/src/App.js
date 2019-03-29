import React, { Component } from 'react';
import Mixer from './components/mixer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>The Garden Mixer</h4>
        </div>
        <Mixer /> 
      </div>
    );
  }
}

export default App;
