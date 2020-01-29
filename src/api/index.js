const TABLE_DATA_SOURCE = 'https://jsonplaceholder.typicode.com/photos';

export const fetchTableData = () => fetch(TABLE_DATA_SOURCE)
    .then(data => data.json())
    .then(data => data)