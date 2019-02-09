import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Orders from './components/Orders/Orders';
import NewQuote from './components/NewQuote/NewQuote';
import NewOrder from './components/NewOrder/NewOrder';
import Clients from './components/Clients/Clients';
import NewClient from './components/NewClient/NewClient';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <Route
            path="/orders"
            component={Orders}
          />
          <Route
            path="/newQuote"
            component={NewQuote}
          />
          <Route
            path="/newOrder"
            component={NewOrder}
          />
          <Route
            path="/clients"
            component={Clients}
          />
          <Route
            path="/newClient"
            component={NewClient}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
