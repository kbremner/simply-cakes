declare module 'redux-api-middleware' {
    import { Middleware } from 'redux';

    const apiMiddleware: Middleware;
    const CALL_API: symbol;
}
