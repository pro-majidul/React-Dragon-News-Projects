import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="left"></div>
            <div className="space-x-5 text-gray-500">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <button className='btn text-white rounded-none bg-neutral'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;