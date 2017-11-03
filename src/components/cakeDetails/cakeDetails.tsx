import React, { Component } from 'react';
import Cake from '../../models/cake';
import './cakeDetails.css';

interface CakeDetailsProps extends Cake {
    loading: boolean;
}

class CakeDetails extends Component<CakeDetailsProps> {
    render() {
        if (this.props.loading) {
            return (
                <div className="loadingMsg">
                    <span>Loading...</span>
                </div>
            );
        }

        return (
            <div className="cakeDetails">
                <div className="imageContainer">
                    <img src={this.props.imageUrl} />
                </div>
                <div className="detailsContainer">
                    <div><b>Cake Name:</b> <span>{this.props.name}</span></div>
                    <div><b>Yum Factor:</b> <span>{this.props.yumFactor}</span></div>
                    <div><b>Comment:</b> <span>{this.props.comment}</span></div>
                </div>
            </div>
        );
    }
}

export default CakeDetails;
