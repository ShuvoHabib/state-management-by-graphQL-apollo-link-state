import React from 'react';
import TodoList from './TodoList'
import './App.css';

const Header = () => (
    <header className="App-headers">
      <h1 className="App-title">Apollo Link State Demo</h1>
    </header>);

const App = () => (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
);

export default App;