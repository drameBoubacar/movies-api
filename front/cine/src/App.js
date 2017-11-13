import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowFilm from './components/ShowFilm';
import AddFilm from './components/AddFilm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddFilm/>
       <ShowFilm />
      </div>
    );
  }
}

export default App;
