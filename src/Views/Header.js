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
    let favList;
    favList = JSON.parse(localStorage.getItem('getFavList'));
    if(favList === null) {
        favList = []
    }
    return(
        <div className="header">
                <Link to="/"><img src={logo} className="auto1-logo" alt="logo" /></Link>
                <ul>
                    <li><a href="#contact">{SELL}</a></li>
                    <li><a href="#news">{MY_ORDERS}</a></li>
                    <li><a href="#home">{PURCHASE}</a></li>
                    {favList.length ? (<li><Link to="/favourite">Fav List</Link></li>) : ''}
                </ul>
        </div>
    )
}

export default Header;