import { combineReducers } from 'redux';
import cakes, { CakesState } from './cakes';

export interface AppState {
    cakes: CakesState;
}

const rootReducer = combineReducers({
    cakes
});

export default rootReducer;
