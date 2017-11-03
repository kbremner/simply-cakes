import React from 'react';
import CakeListContainer from './containers/cakeListContainer';
import AddCakeContainer from './containers/addCakeContainer';
import CakeDetailsContainer from './containers/cakeDetailsContainer';
import NavBar from './components/navBar';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Route path="/" component={NavBar} />
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
                    <Route
                        exact={true}
                        path="/cakes/:id"
                        component={CakeDetailsContainer}
                    />
                </div>
            </div>
        );
    }
}

export default App;
