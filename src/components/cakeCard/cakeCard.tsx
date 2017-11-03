import React, { Component } from 'react';
import './cakeCard.css';
import Cake from '../../models/cake';

const defaultCakeImage = require('./default_cake.png');

class CakeCard extends Component<Cake> {
    render() {
        const { imageUrl, name } = this.props;
        return (
            <div className="cakeCard">
                <img src={imageUrl || defaultCakeImage} onError={this.onImageLoadError} />
                <span>{name}</span>
            </div>
        );
    }

    onImageLoadError(event: React.SyntheticEvent<HTMLImageElement>) {
        if (event.currentTarget.src !== defaultCakeImage) {
            event.currentTarget.src = defaultCakeImage;
        }
    }
}

export default CakeCard;
