import React from 'react';
import { Link } from 'react-router-dom';
import {
    PURCHASE,
    MY_ORDERS,
    SELL,
    FAV_LIST
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
                    <li><Link to="/">{SELL}</Link></li>
                    <li><Link to="/">{MY_ORDERS}</Link></li>
                    <li><Link to="/">{PURCHASE}</Link></li>
                    {favList.length ? (<li><Link to="/favourite">{FAV_LIST}</Link></li>) : ''}
                </ul>
        </div>
    )
}

export default Header;