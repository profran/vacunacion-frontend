import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

class NavBar extends Component {
    render() {
        return (
            <div className='navbar center'>
                <NavLink className='navbar--component center' activeClassName='navbar--component__selected' to='/home'><h3>Home</h3></NavLink>
                <NavLink className='navbar--component center' activeClassName='navbar--component__selected' to='/login'><h3>Login</h3></NavLink>
                <NavLink className='navbar--component center' activeClassName='navbar--component__selected' to='/signup'><h3>Sign up</h3></NavLink>
            </div>
        );
    }
}

export default NavBar;