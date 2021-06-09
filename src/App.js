import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './scenes/Auth/Login/Login';
import VerifiedCode from './scenes/Auth/VerifiedCode/VerifiedCode';
import Home from './scenes/Home/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch className="h-100">
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/verified-code" component={VerifiedCode} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
