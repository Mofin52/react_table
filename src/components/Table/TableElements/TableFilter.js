import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setTableFilter} from '../../../ducks/tableData';

function TableFilter () {
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        dispatch(setTableFilter(e.target.value))
    };
    const filterValue = useSelector(({ tableData}) => tableData.filterValue)
    return (
        <div className='table_filter'>
            <label htmlFor="albumFilter">Filter by Almub ID:</label>
            <input type="text" name="tableFilter" id="albumFilter" value={filterValue} onChange={handleInputChange}/>
        </div>
    )
}

export default TableFilter;