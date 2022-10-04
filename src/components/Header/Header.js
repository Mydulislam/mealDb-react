import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Heacer.css'
const Header = () => {
    return (
        <nav className='header-nav'>
            <Link className='logo' to='/home'>Meals <span>App</span> </Link>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/foods'>Foods</NavLink>
                <NavLink to='/categories'>Categories</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </nav>
    );
};

export default Header;