import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cakeCard.css';
import Cake from '../../models/cake';

const defaultCakeImage = require('./default_cake.png');

class CakeCard extends Component<Cake> {
    render() {
        const { imageUrl, name, id } = this.props;
        return (
            <Link className="cakeCardContainer" to={`/${id}`}>
                <div className="cakeCard">
                    <img src={imageUrl || defaultCakeImage} onError={this.onImageLoadError} />
                    <span>{name}</span>
                </div>
            </Link>
        );
    }

    onImageLoadError(event: React.SyntheticEvent<HTMLImageElement>) {
        if (event.currentTarget.src !== defaultCakeImage) {
            event.currentTarget.src = defaultCakeImage;
        }
    }
}

export default CakeCard;
