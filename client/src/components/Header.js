import React from 'react';
import logo from '../images/logo.png';
const Header = () => {
    return (
        <div className='App-header'>
            <img src={logo}/>
            <h1>
            React Recipe Book 
            </h1>
            <nav>
                <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/favorites'>Favorites</a></li>
                <li><a href='/categories'>Categories</a></li>
                <li><a href='/about'>About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
