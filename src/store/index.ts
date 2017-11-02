import { createStore, compose } from 'redux';
import rootReducer from  '../reducers';

// Enable redux dev tools
// devToolsExtension is a custom property on window,
// so doesn't exist in the typing, so cast to any
// tslint:disable-next-line no-any
const anyWindow = (window as any);
const enhancers = compose(
    anyWindow.devToolsExtension ? anyWindow.devToolsExtension() : (f: {}) => f
);

export default () => {
    return createStore(rootReducer, {}, enhancers);
};
