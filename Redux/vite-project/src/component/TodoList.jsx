import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'

const TodoList = () => {
    let readTodos = useSelector((store) => store.todo.todos)
  return (
    <div>
        {
            readTodos.map((todo) => {
                return <Todo id={todo.id} title={todo.title}/>
            })
        }
    </div>
  )
}

export default TodoList