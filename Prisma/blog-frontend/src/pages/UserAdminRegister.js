import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function UserAdminRegister() {
    const navigate = useNavigate();
    return (
        <div className="p-6 max-w-md mx-auto flex flex-col items-center space-y-6">
            <h1 className="font-bold text-lg">REGISTER AS</h1>
            <div className="flex flex-col gap-4 w-full">
                <button onClick={()=>{navigate('/userRegister')}} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">User</button>
                <button onClick={() =>{navigate('/adminRegister')}} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Admin</button>
            </div>
        </div>
    )
}

export default UserAdminRegister;