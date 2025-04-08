import React from 'react'
import TodoInput from './TodoInput'
import { deleteTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

const Todo = (props) => {
    let dispatch = useDispatch()
  return (
    <div>
        <span>{props.title}</span>
        <button onClick={()=>dispatch(deleteTodo(props.id))}>❌</button>
    </div>
  )
}

export default Todo