import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Bonus from './Bonus';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="App-content">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/bonus">Bonus Content!!</Link>
            </div>
            <Route path="/bonus" component={Bonus} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
