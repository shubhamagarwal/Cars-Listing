/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import TablePagination from "@material-ui/core/TablePagination";
import axios from 'axios';
import List from './Views/List';
import Header from './Views/Header';
import Footer from './Views/Footer';
import './Listing.css';

function Listing() {
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
    const [page, setPageNo] = useState(0);
    const [count, setCarsPageCount] = useState({
        totalCarsCount : '100',
        totalPageCount: '10'
    });
    const [mileageList] = useState(['None', 'Mileage - Ascending', 'Mileage - Descending'])

    // api call for fetching colors list
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

    useEffect(() => {
        const fetchData = async () => {
            await axios(
            `https://auto1-mock-server.herokuapp.com/api/cars?page=${page+1}&color=${filter.getSelectedColor}&manufacturer=${filter.getselectedManufactured}&sort=${filter.getMileageValue}`,
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

    const getFilterResult = () => {
        setFilter({
            ...filter,
            getSelectedColor: filterParam.selectedColor,
            getselectedManufactured: filterParam.selectedManufactured
        })
    }

    const onPageSelection = (e, page) => {
        setPageNo(page);
    }

    const colorData = ['All car colors', ...colorList];
    const manufacturerData = ['All manufacturers', ...manufacturerList];
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
                carsCount={count}
            />
            <TablePagination
                component="nav"
                page={page}
                rowsPerPage={10}
                count={count.totalCarsCount}
                onChangePage={onPageSelection}
            />
            <Footer />
        </div>
    )
}

export default React.memo(Listing);

