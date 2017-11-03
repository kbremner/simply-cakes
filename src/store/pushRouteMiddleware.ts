import { Middleware, AnyAction } from 'redux';
import { push } from 'react-router-redux';

// Updates the browser path if an action has a "meta.path" property
const pushRouteMiddleware: Middleware = ({ dispatch, getState }) => next => action => {
    const anyAction = action as AnyAction;
    if (anyAction.meta && anyAction.meta.path) {
        dispatch(push(anyAction.meta.path));
    }

    return next(action);
};

export default pushRouteMiddleware;
