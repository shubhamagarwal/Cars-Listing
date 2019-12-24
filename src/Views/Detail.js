import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import './Detail.css';

export const Detail = ({match}) => {
    const {
        params: {
            carId
        }
    } =  match;
    const [carDetails, setCarDetails] = useState({});

    // api call for fetching car list
    useEffect(() => {
        const fetchData = async () => {
            await axios(
            `https://auto1-mock-server.herokuapp.com/api/cars/${carId}`,
            )
            .then(result => {
                setCarDetails(result.data.car);
            });
        };
        fetchData();
    }, [carId]);

    return (
        <>
            <Header />
            {Object.keys(carDetails).length > 0 ? (
                <div>
                    <div className="img-wrapper"></div>
                    <div className="detail-wrapper">
                        <div className="car-info-section">
                            <div className="car-details">
                                <div className="manufacture-name">{carDetails.manufacturerName}</div>
                                <div className="car-desc">Stock # 
                                    {carDetails.stockNumber} - 
                                    {carDetails.mileage.number} {carDetails.mileage.unit} - 
                                    {carDetails.fuelType} - {carDetails.color}
                                </div>
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
                                <a className="fav-btn" href="/#" >SAVE</a>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <div>No details found for this car.</div>}
            <Footer />
        </>
    )
}

export default Detail;

