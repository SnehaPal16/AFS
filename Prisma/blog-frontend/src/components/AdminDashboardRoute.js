import React from 'react'
import { Navigate } from 'react-router-dom';

const AdminDashboardRoute = ({children}) => {
    const role = localStorage.getItem("role");
    if(role === "admin"){
        return (
            children
        )
    }
    else{
       return <Navigate to="/adminLogin"/>
    }
  
}

export default AdminDashboardRoute