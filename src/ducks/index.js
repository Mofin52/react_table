import {combineReducers} from 'redux';
import { tableData } from './tableData';

const appReducer  = combineReducers({
    tableData,
});

export default appReducer;