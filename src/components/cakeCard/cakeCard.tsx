import React, { Component } from 'react';
import Cake from '../../models/cake';

class CakeCard extends Component<Cake> {
    render() {
        const { imageUrl, name } = this.props;
        return (
            <div>
                <img src={imageUrl} />
                <span>{name}</span>
            </div>
        );
    }
}

export default CakeCard;
