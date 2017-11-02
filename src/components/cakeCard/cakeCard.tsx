import * as React from 'react';

interface CakeCardProps {
    imageUrl: string;
    name: string;
}

class CakeCard extends React.Component<CakeCardProps, {}> {
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
