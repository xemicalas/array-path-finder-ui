import superagent from 'superagent';

import { Environment } from '../config/environment';

export const calculateArrayPath = (array) => {
    return superagent
        .post(`${Environment.ApiUrl}/PathFinder/CalculatePath`)
        .send({ items: array })
        .then(response => response.body);
};