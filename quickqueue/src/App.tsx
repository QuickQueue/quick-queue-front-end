import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { LoginForm } from "./components/LoginForm";
import { ItemView } from "./components/ItemView";
import { StoreFront } from "./components/StoreFront";
import { RegisterForm } from "./components/RegisterForm";
import { User } from "./models/Users";

export const UserContext = React.createContext<any>(undefined);

function App() {
  const [user, changeUser] = useState<User>();

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <h1>Path route is empty</h1>} />
            <Route path="/login">
              <LoginForm currentUser={user} updateCurrentUser={changeUser} />
            </Route>

            <Route path="/store">
              <StoreFront />
            </Route>

            <Route path="/register">
              <RegisterForm isCustomer={true} />
            </Route>

            <Route path="/items">
              <ItemView />
            </Route>

            <Route path="/" render={() => <h1>No path was chosen</h1>} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
