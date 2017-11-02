import React, { Component } from 'react';

export interface CakeCardProps {
    id: number;
    imageUrl: string;
    name: string;
}

class CakeCard extends Component<CakeCardProps, {}> {
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
