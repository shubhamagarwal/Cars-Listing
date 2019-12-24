import React from 'react';
import { Link } from 'react-router-dom';
import './List.css';
import {
    MAX_PAGES,
    VIEW_DETAILS,
    AVAILABLE_CARS,
    FILTER,
    MANUFACTURER,
    COLOR
} from '../Shared/Constant';
import DropDown from '../Shared/Components/DropDown';
import Pagination from '../Shared/Components/Pagination';

const List = (props) => {
    const {
        colorList,
        getFilterValue,
        filterParam,
        manufacturerList,
        carsList,
        getFilterResult,
        mileageList,
        count : {
            totalCarsCount,
            totalPageCount
        },
        page,
        onClickPreviousAndNext,
        onPageSelection
    } = props;
    return (
        <>
            <div className="car-search-container">
                <div className="filter-panel">
                    <div className="filter-box">
                        <span className="color-text">{COLOR}</span>
                        <DropDown
                            type="selectedColor"
                            data={colorList} 
                            getFilterValue={getFilterValue}
                            selectedFilterValue={filterParam.selectedColor}
                        />
                        <span className="manufacturer-text">{MANUFACTURER}</span>
                        <DropDown
                            type="selectedManufactured"
                            data={manufacturerList} 
                            getFilterValue={getFilterValue}
                            selectedFilterValue={filterParam.selectedManufactured}
                        />
                        <a className="btn-style" href="/#" onClick={getFilterResult}>{FILTER}</a>
                    </div>
                </div>
                <div className="car-info">
                    <div className="car-header">
                        <div className="car-availibility">
                            <span className="cars-count">{AVAILABLE_CARS}</span>
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
                                        <div className="view-details"><Link to={`/detail/${car.stockNumber}`} >{VIEW_DETAILS}</Link></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : ''}
                </div>
            </div>
            <div className="pagination-wrapper">
                <Pagination
                    data-qa="pagination"
                    currentPage={page}
                    totalPages={totalPageCount}
                    maxPages={MAX_PAGES}
                    onClickPreviousAndNext={onClickPreviousAndNext}
                    onSelectPage={onPageSelection}
                />
            </div>
        </>
    )
}

export default React.memo(List);