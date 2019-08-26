import { calculateArrayPath } from '../../../services/ArrayPathFinderService';

export const CALCULATE_ARRAY_PATH = 'CALCULATE_ARRAY_PATH';
export const CALCULATE_ARRAY_PATH_PENDING = 'CALCULATE_ARRAY_PATH_PENDING';
export const CALCULATE_ARRAY_PATH_FULFILLED = 'CALCULATE_ARRAY_PATH_FULFILLED';
export const CALCULATE_ARRAY_PATH_REJECTED = 'CALCULATE_ARRAY_PATH_REJECTED';

const calculateArrayPathAction = (array) => ({
    type: CALCULATE_ARRAY_PATH,
    payload: calculateArrayPath(array)
});

const failedToCalculateAction = () => ({
    type: CALCULATE_ARRAY_PATH_REJECTED
});

export { calculateArrayPathAction as calculateArrayPath, failedToCalculateAction as failedToCalculate };