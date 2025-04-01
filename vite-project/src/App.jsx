import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Profile from './component/Profile'
import UserList from './component/UserList'
import User from './component/User'
import { useNavigate } from 'react-router-dom';
const App = () => {
  let navigate = useNavigate();
  function displayUserList(){
    navigate('/userlist');
  }
  return (

    
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/:username' element={<Profile></Profile>}></Route>
        <Route path='/userlist' element={<UserList></UserList>}>
          <Route path=':id' element={<User></User>}></Route>
        </Route>
      </Routes>
      <button onClick={displayUserList}>Display User List</button>
    </div>
 
  )
}


export default App
