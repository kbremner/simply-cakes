import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import cakes, { CakesState } from './cakes';

export interface AppState {
    cakes: CakesState;
    router: RouterState;
}

const rootReducer = combineReducers({
    cakes,
    router: routerReducer
});

export default rootReducer;
