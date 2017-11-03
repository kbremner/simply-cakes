import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';
import App from './App';

it('renders without crashing', () => {
  const history = createHistory();
  const store = configureStore(history);
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
