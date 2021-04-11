import React from 'react';
import { HomePage } from './components/HomePage'
import { MyProfile } from './components/MyProfile'
import { NearbySwaps } from './components/NearbySwaps'
import { StartASwap } from './components/StartASwap'
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { MealIdeas } from './components/MealIdeas';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/MealIdeas" component={MealIdeas} />
          <Route path="/MyProfile" component={MyProfile} />
          <Route path="/NearbySwaps" component={NearbySwaps} />
          <Route path="/StartASwap" component={StartASwap} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;