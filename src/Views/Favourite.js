import React from 'react';
import {
    DELETE
} from '../Shared/Constant';
import Header from './Header';
import Footer from './Footer';
import './Favourite.css';


const FavouriteCars = (props) => {
    const favList = JSON.parse(localStorage.getItem('getFavList'));

    const deleteFromList = stockNo => () => {
        const listAfterDeletion = favList.filter((item) => item.stockNumber !== stockNo);
        debugger
        localStorage.setItem('getFavList', JSON.stringify(listAfterDeletion));
        if (listAfterDeletion.length === 0) {
            props.history.push(`/`)
        }
    }
    return (
        <div className="app-container">
            <Header />
            <div className="fav-list">
                {favList.map((car,i) => {
                        return (
                            <div key={i} className="car-listing">
                                <div className="car-spec">
                                    <img className="car-logo" src={car.pictureUrl} alt={car.modelName} title={car.modelName} />
                                    <div className="car-spec-list">
                                        <div className="manufacture-name">{car.manufacturerName}</div>
                                        <div>Stock # {car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</div>
                                        <div className="view-details"><a href="#" onClick={deleteFromList(car.stockNumber)}>{DELETE}</a></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

            </div>
            <Footer />
        </div>
    )
}

export default FavouriteCars;