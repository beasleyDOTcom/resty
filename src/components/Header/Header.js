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
                        <Link to="/bow">bow wow</Link>
                    </li>
                    <li>
                        <NavLink to="/chica" activeClassName="here">chica wow wow</NavLink>
                    </li>
                    {/* look in class demo scss for how it handles the A tag on hover etc. */}
                    <li>
                        <NavLink to ="/yippie">yippi yo yipie yay</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;