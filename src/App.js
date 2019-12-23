/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    ALL_CAR_COLORS,
    ALL_MANUFACTURERS
} from './Shared/Constant';
import List from './Views/List';
import Header from './Views/Header';
import Footer from './Views/Footer';
import './App.css';

function App() {
    const [colorList, setColors] = useState([]);
    const [manufacturerList, setManufacturer] = useState([]);
    const [filterParam, setFilterParam] = useState({
        selectedColor: '',
        selectedManufactured: '',
        getMileageValue: ''
      });
    const [carsList, setCarList] = useState([]);
    const [filter, setFilter] = useState({
        getSelectedColor: '',
        getselectedManufactured: '',
        getMileageValue: ''
    })
    const [page, setPageNo] = useState(1);
    const [count, setCarsPageCount] = useState({
        totalCarsCount : '100',
        totalPageCount: '10'
    });
    const [mileageList] = useState(['None', 'Mileage - Ascending', 'Mileage - Descending'])

    // api call for fetching colors & manufacturers list
    useEffect(() => {
        const fetchData = async () => {
            axios.all([
                axios.get('https://auto1-mock-server.herokuapp.com/api/colors'),
                axios.get('https://auto1-mock-server.herokuapp.com/api/manufacturers')
            ]).then(resposeArr => {
                setColors(resposeArr[0].data.colors);
                setManufacturer(resposeArr[1].data.manufacturers.map(item => item.name));
            })
        };
        fetchData();
    }, []);

    // api call for fetching car list
    useEffect(() => {
        const fetchData = async () => {
            await axios(
            `https://auto1-mock-server.herokuapp.com/api/cars?page=${page}&color=${filter.getSelectedColor}&manufacturer=${filter.getselectedManufactured}&sort=${filter.getMileageValue}`,
            )
            .then(result => {
                setCarList(result.data.cars);
                setCarsPageCount({
                    totalCarsCount: result.data.totalCarsCount,
                    totalPageCount: result.data.totalPageCount
                });
            });
        };
        fetchData();
    }, [filter, page]);

    const getMileageFilterValue = {
        'None' : '',
        'Mileage - Ascending' : 'asc',
        'Mileage - Descending' : 'des'
    }

    // function gets called when change the value of dropdown component
    const getFilterValue = value => event => {
        if( value === 'getMileageValue') {
            setFilter({
                ...filter,
                [value]: getMileageFilterValue[event.target.value],
              });

        }
        setFilterParam({
            ...filterParam,
            [value]: event.target.value,
        });
    }

    // function gets called when click on filter button
    const getFilterResult = () => {
        setFilter({
            ...filter,
            getSelectedColor: filterParam.selectedColor === ALL_CAR_COLORS ? '' : filterParam.selectedColor,
            getselectedManufactured: filterParam.selectedManufactured === ALL_MANUFACTURERS ? '' : filterParam.selectedManufactured
        })
    }

    // function gets called when click on pagination number
    const onPageSelection = (page) => {
        setPageNo(page);
    }

    // function gets called when click on pagination previous next icon
    const onClickPreviousAndNext = (isNext) => {
        if (isNext) {
            setPageNo(page + 1)
          } else {
            setPageNo(page - 1);
          }
    }

    const colorData = [ALL_CAR_COLORS, ...colorList];
    const manufacturerData = [ALL_MANUFACTURERS, ...manufacturerList];
    
    return (
        <div className="app-container">
            <Header />
            <List
                colorList={colorData}
                getFilterValue={getFilterValue}
                filterParam={filterParam}
                manufacturerList={manufacturerData}
                carsList={carsList}
                getFilterResult={getFilterResult}
                mileageList={mileageList}
                count={count}
                page={page}
                onClickPreviousAndNext={onClickPreviousAndNext}
                onPageSelection={onPageSelection}
            />
            <Footer />
        </div>
    )
}

export default React.memo(App);

