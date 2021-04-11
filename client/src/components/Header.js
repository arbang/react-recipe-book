import React from 'react'

const Header = () => {
    return (
        <div class='App'>
        <h1>
           React Recipe Book 
        </h1>
        <nav className='nav'>
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
