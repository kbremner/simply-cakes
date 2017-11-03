import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { MemoryRouter } from 'react-router';
import configureStore from './store';
import App from './App';

it('renders without crashing', () => {
    const history = createHistory();
    const store = configureStore(history);
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>,
        div);
});
