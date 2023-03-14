import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <div id='container'>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Packages</li>
                        <li>Tours</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;