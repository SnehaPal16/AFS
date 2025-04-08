import React from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const TodoInput = () => {
    let dispatch = useDispatch()
    const [input , setInput] = useState('');
  return (
    <div>
        <input type='text' value={input} placeholder='Enter Title' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>{dispatch(addTodo(input))
          setInput('')
        }}>Add todo</button>
    </div>
  )
}

export default TodoInput