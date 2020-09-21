import React from 'react';
import './header.scss';
import {Link, NavLink} from 'react-router-dom';

function Header(){
    return (
        <header className="header">
            <h1>ReSTy</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/history" activeClassName="history">History</NavLink>
                    </li> 
                    {/* look in class demo scss for how it handles the A tag on hover etc. */}
                    <li>
                        <NavLink to ="/help">Help</NavLink>
                    </li>
                </ul> 
            </nav>
        </header>
    )
}

export default Header;