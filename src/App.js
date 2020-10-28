import React from 'react'
import TheLayout from './UI/Layout/TheLayout'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={TheLayout} /> 
      </Switch>
    </Router>
  );
}

export default App;
