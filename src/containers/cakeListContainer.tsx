import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import { fetchCakes } from '../actions';
import { AppState } from '../reducers';
import { selectors } from '../reducers/cakes';
import CakeList from '../components/cakeList';
import Cake from '../models/cake';

interface CakeListContainerProps {
    loadCakes: () => void;
    loading: boolean;
    cakes: Cake[] | null;
}

export class CakeListContainer extends Component<CakeListContainerProps> {
    componentDidMount() {
        this.props.loadCakes();
    }

    render() {
        return (<CakeList loading={this.props.loading} cakes={this.props.cakes} />);
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        cakes: selectors.all(state),
        loading: selectors.loading(state)
    };
};

// The typing for react-redux requires an action to have
// a type, but adding a type causes redux-api-middleware
// to dispatch an action stating that there is an
// invalid root key 'type'. So, we won't add type to
// actions intended for redux-api middleware (which is
// fine because it handles dispatching actions with
// the type set as required for reducers and middleware).
// We also have to add the below comment to allow 'any'
// to be used as the type for the dispatch argument.
// tslint:disable-next-line no-any
const mapDispatchToProps = (dispatch: ((arg: any) => {})) => {
    return {
        loadCakes: () => {
            dispatch(fetchCakes());
        }
    };
};

// export it as a class with no properties
export default connect(mapStateToProps, mapDispatchToProps)(CakeListContainer) as ComponentClass<{}>;
