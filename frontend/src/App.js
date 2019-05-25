import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            Prashanth Yerramilli
            <MainComponent />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;