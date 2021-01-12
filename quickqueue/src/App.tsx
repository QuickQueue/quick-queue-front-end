import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import { LoginForm } from './components/LoginForm'
import { StoreFront } from './components/StoreFront'
import { User } from './models/Users';

export const UserContext = React.createContext<any>(undefined);

function App() {
  
  const [user, changeUser] = useState<User>()

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>

          <Route path='/login'>
            <LoginForm currentUser={user} updateCurrentUser={changeUser}/>
          </Route>

          <Route path='/store'>
            <StoreFront />
          </Route>

        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;