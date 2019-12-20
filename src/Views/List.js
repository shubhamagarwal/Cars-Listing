import React from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../Components/DropDown';
import './List.css';

const List = (props) => {
    const {
        colorList,
        getFilterValue,
        filterParam,
        manufacturerList,
        carsList,
        getFilterResult,
        mileageList,
        carsCount : {
            totalCarsCount
        }
    } = props;
    return (
        <div className="grid-container">
            <div className="filter-panel">
                <div className="filter-box">
                    <span className="color-text">Color</span>
                    <DropDown
                        type="selectedColor"
                        data={colorList} 
                        getFilterValue={getFilterValue}
                        selectedFilterValue={filterParam.selectedColor}
                    />
                    <span className="manufacturer-text">Manufacturer</span>
                    <DropDown
                        type="selectedManufactured"
                        data={manufacturerList} 
                        getFilterValue={getFilterValue}
                        selectedFilterValue={filterParam.selectedManufactured}
                    />
                    <a className="btn-style" href="#" onClick={getFilterResult}>Filter</a>
                </div>
            </div>
            <div className="car-info">
                <div className="car-header">
                    <div className="car-availibility">
                        <span className="cars-count">Available Cars</span>
                        <span>Showing 10 of {totalCarsCount} results</span>
                    </div>
                    <div className="sort-mileage">
                        <span>Sort By</span> 
                        <DropDown
                            type="getMileageValue"
                            data={mileageList} 
                            getFilterValue={getFilterValue}
                            selectedFilterValue={filterParam.selectedMileage}
                        />
                    </div>
                </div>
                {carsList.length ? carsList.map((car,i) => {
                    return (
                        <div key={i} className="car-listing">
                            <div className="car-spec">
                                <img className="car-logo" src="https://auto1-js-task-api--mufasa71.repl.co/images/car.svg" alt="hello" />
                                <div className="car-spec-list">
                                    <div className="manufacture-name">{car.manufacturerName}</div>
                                    <div>Stock # {car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}</div>
                                    <div className="view-details"><Link to="/" >View details</Link></div>
                                </div>
                            </div>
                        </div>
                    )
                }) : ''}
            </div>
        </div>
    )
}

export default React.memo(List);