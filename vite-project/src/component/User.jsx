import React from 'react'
import { useParams } from 'react-router-dom'

const User = (props) => {
    let {id} = useParams();
  return (
    <div>
        <h1>User is {id}</h1>
    </div>
  )
}

export default User