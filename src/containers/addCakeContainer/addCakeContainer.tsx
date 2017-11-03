import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import AddCake from '../../components/addCake';
import Cake from '../../models/cake';
import { addCake } from '../../actions';
import { AppState } from '../../reducers';
import { selectors } from '../../reducers/cakes';

interface AddCakeContainerProps {
    createCake: (newCake: Cake) => void;
    saving: boolean;
}

export class AddCakeContainer extends Component<AddCakeContainerProps, { cake: Cake }> {
    constructor(props: AddCakeContainerProps) {
        super(props);
        this.state = {
            cake: {
                id: undefined,
                name: '',
                comment: '',
                yumFactor: 1,
                imageUrl: ''
            }
        };
    }

    render() {
        return (
            <AddCake
                cake={this.state.cake}
                onChange={(cake) => this.setState({ cake })}
                save={() => this.props.createCake(this.state.cake)}
                saving={this.props.saving}
            />
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        saving: selectors.saving(state)
    };
};

// tslint:disable-next-line no-any
const mapDispatchToProps = (dispatch: ((arg: any) => {})) => {
    return {
        createCake: (newCake: Cake) => {
            dispatch(addCake(newCake));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCakeContainer) as ComponentClass<{}>;
