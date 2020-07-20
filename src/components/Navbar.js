import React from 'react';
import {NavLink} from 'react-router-dom';


export  const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            INTERNET DEVELS test
        </div>
        <ul className="navbar-nav">
            <li className="nav-item ">
                <NavLink exact className="nav-link" to="/">Map</NavLink>
            </li>
            <li className="nav-item ">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item ">
                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
            </li>
            <li className="nav-item ">
                <NavLink className="nav-link" to="/text">Text</NavLink>
            </li>
        </ul>

    </nav>
)