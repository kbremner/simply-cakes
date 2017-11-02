import React, { Component } from 'react';
import CakeCard, { CakeCardProps } from '../cakeCard';

interface CakeListProps {
    cakes: CakeCardProps[];
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
