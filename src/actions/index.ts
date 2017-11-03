import { CALL_API } from 'redux-api-middleware';
import types from './types';

const BASE_URI = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api';

export function fetchCakes() {
  return {
    [CALL_API]: {
      endpoint: `${BASE_URI}/cakes`,
      method: 'GET',
      types: [types.FETCH_CAKES, types.RECEIVED_CAKES, types.FETCH_CAKES_FAILED]
    }
  };
}
