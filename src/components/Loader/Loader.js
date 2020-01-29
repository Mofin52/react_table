import React from 'react';
import './Loader.css'
import { useSelector, useDispatch } from 'react-redux';
import {requestRetry} from '../../ducks/tableData';

function Loader() {
    const LOADING_MESSAGE = 'Loading table records...'
    const errorMessage = useSelector(({ tableData }) => tableData.errorMessage);
    const dispatch = useDispatch();
    const handleRetryClick = () => dispatch(requestRetry());
    const retryMessage = (
        <>
            <div>{errorMessage}</div>
            <button className='retryBtn' onClick={handleRetryClick}>Retry?</button>
        </>
    )
    return <div className="loader">{errorMessage ? retryMessage : LOADING_MESSAGE}</div>
}

export default Loader;