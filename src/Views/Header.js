import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../logo.png';

const Header = () => {
    return(
        <div className="header">
                <img src={logo} className="auto1-logo" alt="logo" />
                <ul>
                    {/* <Link to="/about"><li><button>Purchase</button></li></Link> */}
                    <li><a href="#home">Purchase</a></li>
                    <li><a href="#news">My Orders</a></li>
                    <li><a href="#contact">Sell</a></li>
                </ul>
            </div>
    )
}

export default Header;