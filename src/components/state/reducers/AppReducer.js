import { combineReducers } from 'redux';

import { CalculateArrayPathReducer } from '../reducers/CalculateArrayPathReducer';

export const AppReducer = combineReducers({
    arrayState: CalculateArrayPathReducer
});