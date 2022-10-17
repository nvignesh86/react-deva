import React from 'react';
import { useNavigate } from "react-router-dom";

import './LeftMenu.style.css';

const LeftMenu = () => {
    let navigate = useNavigate();

    const handleMenu = (path)=>{
        navigate(path);
    }
    return (
        <div className='left-menu-container'>
            <div className='left-menu' onClick={handleMenu.bind(this,'/')}> Home </div>
            <div className='left-menu' onClick={handleMenu.bind(this,'/apiTest')}> API Test </div>
        </div>
    );
}
export default LeftMenu;