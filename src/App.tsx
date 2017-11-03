import React from 'react';
import CakeListContainer from './containers/cakeListContainer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CakeListContainer />
      </div>
    );
  }
}

export default App;
