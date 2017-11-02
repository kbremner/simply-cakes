import React, { Component } from 'react';
import Cake from '../../models/cake';
import CakeCard from '../cakeCard';

interface CakeListProps {
    cakes: Cake[];
}

class CakeList extends Component<CakeListProps, {}> {
    render() {
        return (
            <div>
                {this.props.cakes.map(cake =>
                    <CakeCard key={cake.id} {...cake} />)}
            </div>
        );
    }
}

export default CakeList;
