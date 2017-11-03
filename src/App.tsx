import React from 'react';
import CakeListContainer from './containers/cakeListContainer';
import NavBar from './components/navBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            component={NavBar}
          />
          <Route
            exact={true}
            path="/"
            component={CakeListContainer}
          />
          <Route
            exact={true}
            path="/add"
            render={() => <div>TODO</div>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
