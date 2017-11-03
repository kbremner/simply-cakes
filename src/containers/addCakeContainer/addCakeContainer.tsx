import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';
import AddCake from '../../components/addCake';
import Cake from '../../models/cake';
import { addCake } from '../../actions';
import { AppState } from '../../reducers';

interface AddCakeContainerProps {
    createCake: (newCake: Cake) => void;
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
            />
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
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
