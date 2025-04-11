import React from 'react'
import { useSelector } from 'react-redux'
import { decreament, increament } from './counterSlice';
import { useDispatch } from 'react-redux'

const Counter = () => {
  let value = useSelector((store) => store.counter.count);
  let dispatch = useDispatch()
       
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>dispatch(increament())}>Increament</button>
        <button onClick={()=>dispatch(decreament())}>Decreament</button>
    </div>
  )
}

export default Counter