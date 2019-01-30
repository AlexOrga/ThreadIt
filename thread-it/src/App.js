import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Orders from './components/Orders/Orders';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route
            path="/orders"
            component={Orders}
          />
          <Route/>
          <Route/>
          <Route/>
        </div>
      </Router>
    );
  }
}

export default App;
