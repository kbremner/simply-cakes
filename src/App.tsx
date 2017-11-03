import React from 'react';
import CakeListContainer from './containers/cakeListContainer';
import AddCakeContainer from './containers/addCakeContainer';
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
            component={AddCakeContainer}
          />
        </div>
      </Router>
    );
  }
}

export default App;
