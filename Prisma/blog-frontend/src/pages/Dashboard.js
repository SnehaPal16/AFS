import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [users, setUser] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const handleDeleteUser = async(id) => {
        console.log(id)
        await axios.delete(`http://localhost:4545/api/admin/users/${id}`, {
            headers: { Authorization: localStorage.getItem("token") },
        });
    }

    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get("http://localhost:4545/api/admin/users", {
                headers: { Authorization: localStorage.getItem("token") },
            });
            setUser(res.data);
        }

        const fetchBlogs = async() => {
            const res = await axios.get("http://localhost:4545/api/admin/blogs", {
                headers: { Authorization: localStorage.getItem("token") },
            });
            setBlogs(res.data);
        }
        
        fetchUser();
        fetchBlogs();
    }, [])

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Users List</h2>
                <div className="space-y-4">
                    {users.map((user) => (
                        <div key={user.id} className="p-4 border rounded shadow-sm flex flex-row justify-between">
                            <div>
                                <h3 className="text-xl font-medium">{user.name}</h3>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-gray-600">{user.isAdmin ? "Admin" : "User"}</p>
                            </div>
                            <div>
                                <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Blog List</h2>
                <div className="space-y-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="p-4 border rounded shadow-sm flex flex-row justify-between">
                            <div>
                                <h3 className="text-xl font-medium">{blog.Title}</h3>
                                <p className="text-gray-600">{blog.description}</p>
                            </div>
                            <div className='space-x-4'>
                                <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Accept</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard