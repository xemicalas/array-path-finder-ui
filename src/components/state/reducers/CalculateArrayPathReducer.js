import {
    CALCULATE_ARRAY_PATH_PENDING,
    CALCULATE_ARRAY_PATH_FULFILLED,
    CALCULATE_ARRAY_PATH_REJECTED
} from '../actions/ArrayPathFinderActions';

const initialState = {
    arrayValue: '',
    calculationResult: {},
    fetching: false,
    fetched: false,
    failed: false
};

export const CalculateArrayPathReducer = (state = initialState, action) => {
    switch(action.type) {
        case CALCULATE_ARRAY_PATH_PENDING:
            return {
                ...state,
                calculationResult: {},
                fetching: true,
                fetched: false,
                failed: false
            };
        case CALCULATE_ARRAY_PATH_FULFILLED:
            return {
                ...state,
                calculationResult: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case CALCULATE_ARRAY_PATH_REJECTED:
            return {
                ...state,
                calculationResult: {},
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};