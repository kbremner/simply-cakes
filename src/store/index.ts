import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import { History } from 'history';
import PushRouteMiddleware from './pushRouteMiddleware';
import rootReducer from  '../reducers';

// going to reference some properties that are not on
// window by default, so cast it to any
// tslint:disable-next-line no-any
const anyWindow = (window as any);

// Use the redux-devtools compose if it exists, else fallback to the original
const composeEnhancers = anyWindow.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// exported function creates a store with the required reducers and enhancers
export default (history: History) => {
    const enhancers = composeEnhancers(
        applyMiddleware(
            apiMiddleware,
            routerMiddleware(history),
            PushRouteMiddleware)
    );

    return createStore(rootReducer, {}, enhancers);
};
