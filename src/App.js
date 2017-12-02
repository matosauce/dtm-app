import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Hello!</h1>
          </header>
          <Route exact={true} path="/bonus" render={() => (
            <p className="App-intro">
              My name is Drew Murdoch. This is my fucking website yo!
            </p>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
