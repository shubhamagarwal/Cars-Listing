import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Error.css'
import logo from './../logo.png';
const ErrorPage = () => {
    return (
        <>
        <Header />
        <div className="error-page">
            <img src={logo} className="auto1-logo" alt="logo" />
            <div className="err-title">404 Not Found</div>
            <div className="err-msg">Sorry, the page you are looking for does not exist.<br/>
                You can always go back to the <Link to="/" className="link-homepage">homepage</Link>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default React.memo(ErrorPage);