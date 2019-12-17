import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './DropDown.css';

const DropDown = (props) => {
    const {
        type,
        data,
        getFilterValue,
        selectedFilterValue
    } = props;
    return (
        <FormControl variant="outlined" className={type}>
            <Select
                native
                value={selectedFilterValue}
                inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                }}
                onChange={getFilterValue(type)}
            >
                {data.map((item,i) => {
                    return (
                        <option key ={i} value={item}>{item}</option>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default DropDown;