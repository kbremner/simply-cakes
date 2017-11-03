import { Action } from 'redux';
import reducer, { selectors, initialState, CakesState } from './cakes';
import types from '../actions/types';

const cakes = new Array(10)
    .fill(null)
    .map((val, i) => ({
        id: i,
        name: `cake-name-${i}`,
        imageUrl: `cake-image-url-${i}`,
        yumFactor: 3,
        comment: 'cake comment'
    }));

describe('unhandled action', () => {
    const action: Action = { type: Symbol('NOT_HANDLED_ACTION') };

    it('returns initial state if no state provided', () => {
        const result = reducer(undefined, action);
        expect(result).toEqual(initialState);
    });

    it('returns state if provided', () => {
        const testState: CakesState = { loading: true, all: [], error: new Error('test error') };
        const result = reducer(testState, action);
        expect(result).toEqual(testState);
    });
});

describe(types.FETCH_CAKES, () => {
    const action = { type: types.FETCH_CAKES };

    it('sets other properties from initial state if no state provided', () => {
        const result = reducer(undefined, action);
        expect(result).toEqual({
            ...initialState,
            loading: true
        });
    });

    describe('when request is successful', () => {
        it('sets loading to true', () => {
            const result = reducer(undefined, action);
            expect(result).toHaveProperty('loading', true);
        });
    
        it('sets error to null', () => {
            const testState: CakesState = { ...initialState, error: new Error('test error') };
            const result = reducer(testState, action);
            expect(result).toHaveProperty('error', null);
        });

        it('sets all cakes to null', () => {
            const testState: CakesState = { ...initialState, all: [] };
            const result = reducer(testState, action);
            expect(result).toHaveProperty('all', null);
        });
    });

    describe('when request fails', () => {
        const payload = { name: 'RequestError', message: 'test request error payload' };
        const errorAction = { ...action, payload, error: true };

        it('sets loading to false', () => {
            const result = reducer(undefined, errorAction);
            expect(result).toHaveProperty('loading', false);
        });
        
        it('sets error to the action payload', () => {
            const result = reducer(undefined, errorAction);
            expect(result).toHaveProperty('error', payload);
        });
    });
});

describe(types.RECEIVED_CAKES, () => {
    const action = { type: types.RECEIVED_CAKES, payload: cakes };

    it('sets other properties from initial state if no state provided', () => {
        const result = reducer(undefined, action);
        expect(result).toEqual({
            ...initialState,
            all: cakes
        });
    });

    it('sets cakes property to payload of action', () => {
        const testState: CakesState = { ...initialState, all: [] };
        const result = reducer(testState, action);
        expect(result).toHaveProperty('all', cakes);
    });

    it('sets loading to false', () => {
        const testState: CakesState = { ...initialState, loading: true };
        const result = reducer(testState, action);
        expect(result).toHaveProperty('loading', false);
    });
});

describe(types.FETCH_CAKES_FAILED, () => {
    const payload = { name: 'ResponseError', message: 'test response error payload' };
    const action = { type: types.FETCH_CAKES_FAILED, payload, error: true };

    it('sets other properties from initial state if no state provided', () => {
        const result = reducer(undefined, action);
        expect(result).toEqual({
            ...initialState,
            loading: false,
            error: payload
        });
    });

    it('sets loading to false', () => {
        const result = reducer(undefined, action);
        expect(result).toHaveProperty('loading', false);
    });
    
    it('sets error to the action payload', () => {
        const result = reducer(undefined, action);
        expect(result).toHaveProperty('error', payload);
    });
});

describe('selectors', () => {
    const state: CakesState = {
        error: { name: 'Error', message: 'test error payload' },
        loading: true,
        all: cakes
    };

    it('returns all property from all selector', () => {
        const result = selectors.all({ cakes: state });
        expect(result).toBe(cakes);
    });

    it('returns loading property from loading selector', () => {
        const result = selectors.loading({ cakes: state });
        expect(result).toBe(true);
    });
});
