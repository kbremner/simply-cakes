import React from 'react';
import CakeListContainer from './containers/cakeListContainer';
import AddCakeContainer from './containers/addCakeContainer';
import NavBar from './components/navBar';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route
          path="/"
          component={NavBar}
        />
        <div className="contentContainer">
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
      </div>
    );
  }
}

export default App;
