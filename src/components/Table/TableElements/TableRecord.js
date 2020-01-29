import React, { useState } from 'react';

function TableRecord (props) {
    const { record } = props;
    const [checked, setChecked] = useState(false);
    const handleCheckboxClick = (e) => {setChecked(e.target.checked)}
    return <tr>
        <td><input type='checkbox' name='favorite' checked={checked} onChange={handleCheckboxClick}/></td>
        <td>{record.albumId}</td>
        <td>{record.title}</td>
        <td>{record.url}</td>
    </tr>
}

export default TableRecord;