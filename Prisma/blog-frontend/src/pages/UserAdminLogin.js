import { useNavigate } from "react-router-dom";

function UserAdminLogin() {
    const navigate = useNavigate();
    return (
        <div className="p-6 max-w-md mx-auto flex flex-col items-center space-y-6">
            <h1 className="font-bold text-lg">LOGIN AS</h1>
            <div className="flex flex-col gap-4 w-full">
                <button onClick={()=>{navigate('/userLogin')}} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">User</button>
                <button onClick={() =>{navigate('/adminLogin')}} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Admin</button>
            </div>
        </div>
    )
}

export default UserAdminLogin;