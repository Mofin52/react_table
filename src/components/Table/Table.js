import React from 'react';
import TableHeader from './TableElements/TableHeader';
import TableBody from './TableElements/TableBody';
import TableFilter from './TableElements/TableFilter'
import './Table.css'
import { useSelector } from 'react-redux';
function Table () {
    const records = useSelector(({ tableData }) => tableData.tableRecords)
    return (
        <div className='table_container'>
            <TableFilter/>
            <table>
                <TableHeader/>
                <TableBody records={records}/>
            </table>
        </div>
    )
}

export default Table;