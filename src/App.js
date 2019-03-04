import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { displayBio: true }
  }
  render() {
    const bio = this.state.displayBio ? (
      <div>
        <p>I live in High Wycombe, and code every day.</p>
        <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
        <p>Besides coding, I also love music and pizza!</p>
      </div>
    ) : null

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello!</h1>
          <p>My name is Elisandro. I'm a software developer.</p>
          <p>I'm always looking forward to working on meaningful projects.</p>
          {bio}
        </header>
      </div>
    );
  }
}

export default App;
