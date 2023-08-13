import React from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <h2>
        <Profile/>
        <Login/>
        <ChangeColor/>
      </h2>
    </div>
  );
}

export default App;
