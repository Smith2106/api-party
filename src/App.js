import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";

import './App.css';
import Github from './Github';
import GoogleMaps from './GoogleMaps';
import Homework from './Homework';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </header>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/googlemaps">GoogleMaps API</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/github" component={Github} />
          <Route path="/googlemaps" component={GoogleMaps} />
          <Route path="/homework" component={Homework} />
          <Route render={() => (
            <p>To get started, click one of the links above.</p>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
