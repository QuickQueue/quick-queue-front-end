import React from 'react';
import './App.css';
import { LoginForm}  from './components/loginForm';
import { SearchItem } from './components/SearchItem';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <SearchItem/>
    </div>
  );
}

export default App;
