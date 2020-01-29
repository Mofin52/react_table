import React from 'react';
import TableRecord from './TableRecord';
import { useSelector } from 'react-redux';

function TableBody (props) {
    const tableFilterValue = useSelector(({ tableData }) => tableData.filterValue);
    const itemsToShow = tableFilterValue ? props.records.filter(rec => String(rec.albumId) === tableFilterValue) : props.records;
    return <tbody>
        {itemsToShow.map((record) => <TableRecord key={record.id} record={record}/>)}
    </tbody>
}

export default TableBody;