import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DropDown from './Components/DropDown';
import Header from './Views/Header';
import Footer from './Views/Footer';
import './Listing.css';

function Listing() {
    const [colorList, setColors] = useState([]);
    const [manufacturerList, setManufacturer] = useState([]);
    const [filterParam, setFilterParam] = useState({
        selectedColor: 'red',
        selectedManufactured: 'Audi',
      });

    // api call for fetching colors list
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://auto1-mock-server.herokuapp.com/api/colors',
          );
          console.log(result);
          setColors(result.data.colors);
        };
        fetchData();
      }, []);

    // api call for fetching manufacturers list
    useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
        'https://auto1-mock-server.herokuapp.com/api/manufacturers',
        );
        setManufacturer(result.data.manufacturers.map(item => item.name));
    };
    fetchData();
    }, []);

    const getFilterValue = value => event => {
        console.log(value, event);
        setFilterParam({
            ...filterParam,
            [value]: event.target.value,
          });
    }

    return (
        <div className="app-container">
            <Header />
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
                        <button className="filter-submit">Submit</button>
                    </div>
                </div>
                <div className="car-listing">hello</div>
            </div>
            <Footer />
        </div>
    )
}

export default Listing;

