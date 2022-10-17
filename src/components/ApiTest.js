import React, { useState } from 'react'
import axios from 'axios';

import UserCard from './UserCard';

const ApiTest = () => {
    const [users, setUsers] = useState([]);

    const handleClick = async () => {
        const url = "https://reqres.in/api/users";
        const response = await axios.get(url);
        console.log(response);
        setUsers(response?.data?.data);
    }

    return (
        <div>
            <button onClick={handleClick}>Click to Test API</button>
            <div>
                {
                    users.map(user => {
                        return (
                            <UserCard key={user.id} user={user} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ApiTest;