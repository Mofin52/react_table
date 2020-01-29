// CONSTANTS
export const DATA_LOADING_STARTED = 'tableData/DATA_LOADING_STARTED'
export const DATA_LOADING_SUCCESS = 'tableData/DATA_LOADING_SUCCESS'
export const DATA_LOADING_ERROR = 'tableData/DATA_LOADING_ERROR'
export const SET_TABLE_FILTER = 'tableData/SET_TABLE_FILTER'
export const RETRY_REQUESTED = 'tableData/RETRY_REQUESTED'

export const INITIAL_FORMDATA_STATE = {
    tableRecords: [],
    errorMessage: '',
    filterValue: '',
    loading: false,
    retryRequestedTimestamp: Date.now()
};

// ACTION CREATORS

export const dataLoadingStarted = () => ({
    type: DATA_LOADING_STARTED,
})

export const dataLoadingSuccess = (data) => ({
    type: DATA_LOADING_SUCCESS,
    payload: data,
})

export const dataLoadingError = (err) => ({
    type: DATA_LOADING_ERROR,
    payload: err,
})

export const setTableFilter = (value) => ({
    type: SET_TABLE_FILTER,
    payload: value,
})

export const requestRetry = () => ({
    type: RETRY_REQUESTED
})

// REDUCER

export const tableData = (state = INITIAL_FORMDATA_STATE, action) => {
    switch(action.type) {
        case DATA_LOADING_STARTED:
            return {
                ...state,
                loading: true,
            }
        case DATA_LOADING_SUCCESS:
            return {
                ...state,
                tableRecords: [...action.payload],
                loading: false,
                errorMessage: '',
            }
        case DATA_LOADING_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            }
        case SET_TABLE_FILTER:
            return {
                ...state,
                filterValue: action.payload
            }
        case RETRY_REQUESTED:
            return {
                ...state,
                retryRequestedTimestamp: new Date()
            }
        default:
            return state;
        
    }
}