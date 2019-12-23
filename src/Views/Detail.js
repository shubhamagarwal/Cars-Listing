import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Detail.css';

export const Detail = () => {
    return (
        <>
            <Header />
            <div>
                <div className="detail-wrapper1"></div>
                <div className="detail-wrapper">
                    <div className="car-info-section">
                        <div className="car-details">
                            <div className="manufacture-name">Fiat</div>
                            <div>Stock # 10004 - 108685 km - Diesel - white</div>
                            <div className="delivery-info">This car is currently available and can be delivered as soon as
                                <br />tomorrow morning. Please be aware that delivery times shown in
                                this page are not definitive and may change due to bad weather
                                conditions.
                            </div>
                        </div>
                        <div className="fav-section">
                            <div className="fav-text">If you like this car, click the button and
                                save it in your collection of favourite
                                items.
                            </div>
                            <a className="btn1-style" href="/#" >SAVE</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Detail;

