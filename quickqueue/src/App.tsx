import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import { LoginForm } from './components/LoginForm'
import { StoreFront } from './components/StoreFront'

function App() {
  return (
    <div className="App">
      <Router>

        <Route path='/login'>
          <LoginForm />
        </Route>

        <Route path='/store'>
          <StoreFront />
        </Route>

      </Router>

    </div>
  );
}

export default App;