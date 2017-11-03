import { CALL_API } from 'redux-api-middleware';
import Cake from '../models/cake';
import types from './types';

const BASE_URI = process.env.REACT_APP_API_BASE_URI;

export function fetchCakes() {
    return {
        [CALL_API]: {
            endpoint: `${BASE_URI}/cakes`,
            method: 'GET',
            types: [
                types.FETCH_CAKES,
                types.RECEIVED_CAKES,
                types.FETCH_CAKES_FAILED
            ]
        }
    };
}

export function fetchCake(id: number) {
    return {
        [CALL_API]: {
            endpoint: `${BASE_URI}/cakes/${id}`,
            method: 'GET',
            types: [
                types.FETCH_CAKE,
                types.RECEIVED_CAKE,
                types.FETCH_CAKE_FAILED
            ]
        }
    };
}

export function addCake(newCake: Cake) {
    return {
        [CALL_API]: {
            endpoint: `${BASE_URI}/cakes`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCake),
            types: [
                types.ADD_CAKE,
                {
                    type: types.CAKE_ADDED,
                    meta: { path: '/' }
                },
                types.ADD_CAKE_FAILED
            ]
        }
    };
}
