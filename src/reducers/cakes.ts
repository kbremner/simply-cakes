import { AnyAction } from 'redux';
import types from '../actions/types';
import Cake from '../models/cake';

export interface CakesState {
    loading: boolean;
    saving: boolean;
    error: Error | null;
    all: Cake[] | null;
    details: Cake | null;
}

export const initialState: CakesState = {
    loading: false,
    saving: false,
    error: null,
    all: null,
    details: null,
};

export default (state = initialState, action: AnyAction): CakesState => {
    switch (action.type) {
        case types.FETCH_CAKES:
            return {
                ...state,
                // redux-api-middleware will provide an error property
                // if it was unable to fulfil a request. We will receive
                // this action a second time, with the error property
                // set to true and a payload providing info about the
                // error that occurred.
                error: action.error ? action.payload : null,
                all: null,
                loading: !action.error
            };
        case types.RECEIVED_CAKES:
            return {
                ...state,
                loading: false,
                all: action.payload
            };
        case types.FETCH_CAKES_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case types.FETCH_CAKE:
            return {
                ...state,
                error: action.error ? action.payload : null,
                details: null,
                loading: !action.error
            };
        case types.RECEIVED_CAKE:
            return {
                ...state,
                loading: false,
                details: action.payload
            };
        case types.FETCH_CAKE_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case types.ADD_CAKE:
            return {
                ...state,
                error: action.error ? action.payload : null,
                saving: !action.error
            };
        case types.CAKE_ADDED:
            return {
                ...state,
                saving: false
            };
        case types.ADD_CAKE_FAILED:
            return {
                ...state,
                error: action.payload,
                saving: false
            };
        default:
            return state;
    }
};

const selectors = {
    all: (state: { cakes: CakesState }) => state.cakes.all,
    loading: (state: { cakes: CakesState }) => state.cakes.loading,
    saving: (state: { cakes: CakesState }) => state.cakes.saving,
    details: (state: { cakes: CakesState }) => state.cakes.details
};

export { selectors };
