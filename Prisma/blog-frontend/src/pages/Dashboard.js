import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [users, setUser] = useState([]);


    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get("http://localhost:4545/api/admin/users" , {
                headers:{Authorization : localStorage.getItem("token")},
            });
            setUser(res.data);
        }
        fetchUser();
    })
  return (
    <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <div>
            <h2>Users List</h2>
            <div>
                {users.map((user) =>(
                    <div>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <h2>Blog List</h2>
        </div>
    </div>
  )
}

export default Dashboard