import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'

const UserList = () => {
  return (
    <div>
        <Header></Header>
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>     
        <Link to="4">User 4</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default UserList