import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'  
import { useEffect } from 'react'

const User = (props) => {\
    let [user , setUser] = useState(null);
    let {id} = useParams();
    id = Number(id);
    useEffect(()=>{
      console.log("hi")
      async function fetchUser(URL){
        let response = await fetch(URL);
        let data = await response.json();
        setUser(data);
     
      fetchUser(`https://jsonplaceholder.typicode.com/users/${id}`)
    },[id])
  return (
    <div>
        <h1>User is {id}</h1>
        {user && <div}
    </div>
  )
}

export default User