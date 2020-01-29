import React, { useEffect } from 'react';
import { fetchTableData } from './api';
import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { dataLoadingStarted, dataLoadingSuccess, dataLoadingError} from './ducks/tableData';

function App() {
  const dispatch = useDispatch();
  const hasTableRecords = useSelector(({ tableData }) => tableData.tableRecords.length);
  const retryRequestedTimestamp = useSelector(({ tableData}) => tableData.retryRequestedTimestamp)
  useEffect(() => {
    dispatch(dataLoadingStarted());
    fetchTableData()
      .then(data => {
        dispatch(dataLoadingSuccess(data));
      })
      .catch(err => {
        dispatch(dataLoadingError(err.message));
      })
  }, [dispatch, retryRequestedTimestamp])

  return hasTableRecords ? <Table/> : <Loader />;
}

export default App;
