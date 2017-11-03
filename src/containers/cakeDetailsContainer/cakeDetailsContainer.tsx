import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import CakeDetails from '../../components/cakeDetails';
import Cake from '../../models/cake';
import { fetchCake } from '../../actions';
import { AppState } from '../../reducers';
import { selectors } from '../../reducers/cakes';

interface CakeDetailsContainerProps {
    cake: Cake;
    getCake: (id: number) => void;
    loading: boolean;
    match: {
        params: {
            id: number
        }
    };
}

export class CakeDetailsContainer extends Component<CakeDetailsContainerProps> {
    componentDidMount() {
        this.props.getCake(this.props.match.params.id);
    }

    render() {
        return <CakeDetails loading={this.props.loading} {...this.props.cake} />;
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        loading: selectors.loading(state),
        cake: selectors.details(state)
    };
};

// tslint:disable-next-line no-any
const mapDispatchToProps = (dispatch: ((arg: any) => {})) => {
    return {
        getCake: (id: number) => {
            dispatch(fetchCake(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeDetailsContainer) as ComponentClass<{}>;
