import React , {useState} from "react";
import User from './User';

const UserList = () => {
    let [users, setUsers] = useState([{id : 1}
    return (
        <div className="user-list">
            {users,map((user)=>{
                return (
                    <User key={user.id} name={user.name} age={user.age} email={user.email}/>
                )
            })}
        </div>
    );
}