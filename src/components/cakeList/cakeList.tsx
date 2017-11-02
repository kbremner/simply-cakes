import React, { Component } from 'react';
import Cake from '../../models/cake';
import CakeCard from '../cakeCard';

interface CakeListProps {
    loading: boolean | false;
    cakes: Cake[] | null;
}

class CakeList extends Component<CakeListProps> {
    renderCakes() {
        const { cakes } = this.props;
        return cakes && cakes.length > 0
            ? cakes.map(cake =>
                <CakeCard key={cake.id} {...cake} />)
            : <div>No cakes!</div>;
    }

    render() {
        return (
            <div>
                {this.props.loading
                    ? <div>Loading...</div>
                    : this.renderCakes()}
            </div>
        );
    }
}

export default CakeList;
