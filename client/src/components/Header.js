import React from 'react'

const Header = () => {
    return (
        <>
        <h1>
           React Recipe Book Tracker
        </h1>
        <nav className='nav'>
            <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/favorites'>Favorites</a></li>
            <li><a href='/types'>Types</a></li>
            <li><a href='/about'>About</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Header;
