import React from 'react';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route component={NotFound}/>
        </Switch>

      </Router>

    </div>
  );
};

export default App;





