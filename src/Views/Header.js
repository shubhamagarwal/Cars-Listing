import React from 'react';
import { Link } from 'react-router-dom';
import {
    PURCHASE,
    MY_ORDERS,
    SELL
} from '../Shared/Constant';
import './Header.css';
import logo from './../logo.png';

const Header = () => {
    return(
        <div className="header">
                <Link to="/"><img src={logo} className="auto1-logo" alt="logo" /></Link>
                <ul>
                    <li><a href="#home">{PURCHASE}</a></li>
                    <li><a href="#news">{MY_ORDERS}</a></li>
                    <li><a href="#contact">{SELL}</a></li>
                </ul>
        </div>
    )
}

export default React.memo(Header);