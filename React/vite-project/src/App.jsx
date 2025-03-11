import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function increamentHandler(){
    setCount(count + 1);
  }
  function decreamentHandler(){
    setCount(count - 1);
  } 
  return (
    <div> 
      <button onClick={decreamentHandler}>-</button>
      <div>{count}</div>
      <button onClick={increamentHandler}>+</button>
    </div>
  )
}

// function Parent(){
//   return (
//     <div>
//       <h1>Parent</h1>
//       <Child Name="Sneha" Age="23"/>
//     </div>
//   )
// }

// function Child(props){
//   return (
//     <div>
//       <h1>Child</h1>
//       <h2>Name: {props.Name}</h2>
//       <h2>Age: {props.Age}</h2>
//     </div>
//   )
// }
 export default App
