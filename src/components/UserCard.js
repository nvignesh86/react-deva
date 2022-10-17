import React from 'react';
import './UserCard.style.css';

const User = ({ user }) => {
    return (
        <div className='user'>
            <div className='avatar'>
                <img className='avatar_img' alt={user.first_name} src={user.avatar} />
            </div>
            <div className='text'>
                <div className='row'>
                    <div className='column'>First Name: </div>
                    <div className='column'>{user.first_name} </div>
                </div>
                <div className='row'>
                    <div className='column'>Last Name: </div>
                    <div className='column'>{user.last_name} </div>
                </div>
                <div className='row'>
                    <div className='column'>Email: </div>
                    <div className='column'>{user.email} </div>
                </div>
            </div>
        </div>
    );
}
export default User;