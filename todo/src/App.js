import React from 'react';

import TodoForm from './components/TodoForm';
import Todos from './components/Todos';


import './App.css';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;