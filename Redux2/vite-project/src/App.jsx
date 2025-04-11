import Counter from './features/counter/Counter.jsx'
import Todo from './features/todo/Todo.jsx'
import React from 'react'
import './App.css'
import User from './features/user/User.jsx'

function App() {

  return (
    <div>
      <Counter/>
      <Todo/>
      <User/>
    </div>
  )
}

export default App
