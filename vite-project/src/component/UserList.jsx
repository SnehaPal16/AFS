import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'

const UserList = () => {
  useEffect(()=>{
        console.log("hi")
        async function fetchUser(URL){
          let response = await fetch(URL);
          let data = await response.json();
          setUser(data);
        }
        fetchUser(`https://jsonplaceholder.typicode.com/users/${id}`)
        
      },[])
  return (
    <div>
        <Header></Header>
        {
          users.map((user) => {
            return <div key={user.id}>
              <Link to={user.id.toString}>{user.name}</Link>
            </div>
          })
        } 
        <Outlet></Outlet>
    </div>
  )
}

export default UserList