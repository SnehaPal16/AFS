import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUser } from './UserSlice';

const User = () => {
    let dispatch = useDispatch()
    let {users , status , error} = useSelector((store) => store.user);
console.log(users+'users')
    useEffect(() => {
        dispatch(fetchUser())
    },[])

    if(status === 'pending'){
        return <h1>Loading...</h1>
    }
    if(status === 'error'){
        return <h1>{error}</h1>
    }
    if(status === 'success'){
        return (
            <div>
                {
                    users.map((item) => {
                        return (
                            <div key={item.id}>
                                <h1>{item.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
  
}

export default User