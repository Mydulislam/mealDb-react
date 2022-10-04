import React from 'react';
import { NavLink } from 'react-router-dom';
import './Heacer.css'
const Header = () => {
    return (
        <nav className='header-nav'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/Foods'>Foods</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    );
};

export default Header;