import React, { Component } from 'react';
import Cake from '../../models/cake';

interface AddCakeProps {
    cake: Cake;
    onChange: (cake: Cake) => void;
    save: () => void;
}

class AddCake extends Component<AddCakeProps> {
    render() {
        const { name, imageUrl, yumFactor, comment } = this.props.cake;
        return (
            <div>
                <div style={{ height: 300 }}>
                    <img style={{ height: '100%' }} src={imageUrl || ''} />
                </div>
                <p>Image url:</p>
                <input
                    className="imageUrlInput"
                    value={imageUrl || ''}
                    onChange={(event) => this.onChange({ imageUrl: event.currentTarget.value })}
                />
                <p>Name:</p>
                <input
                    className="nameInput"
                    value={name || ''}
                    onChange={(event) => this.onChange({ name: event.currentTarget.value })}
                />
                <p>Yum Factor:</p>
                <input
                    className="yumFactorInput"
                    type="number"
                    value={yumFactor}
                    min={1}
                    max={5}
                    onChange={(event) => this.onChange({ yumFactor: event.currentTarget.value })}
                />
                <p>Comment:</p>
                <input
                    className="commentInput"
                    value={comment || ''}
                    onChange={(event) => this.onChange({ comment: event.currentTarget.value })}
                />
                <input
                    className="saveButton"
                    type="button"
                    onClick={this.props.save}
                    value="Save"
                />
            </div>
        );
    }

    onChange(newValues: {}) {
        const { id, name, imageUrl, yumFactor, comment } = this.props.cake;
        const newCake = {
            id,
            name,
            imageUrl,
            yumFactor,
            comment,
            ...newValues
        };
        this.props.onChange(newCake);
    }
}

export default AddCake;
