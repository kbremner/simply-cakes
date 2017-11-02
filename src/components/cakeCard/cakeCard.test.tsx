/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import CakeCard from './cakeCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CakeCard name="" imageUrl="" />, div);
});

describe('when rendered', () => {
    const imageUrl = 'cake-image-url';
    const name = 'cake-name';
    let wrapper: ShallowWrapper<{}, {}>;
    
    beforeAll(() => {
        wrapper = shallow(<CakeCard name={name} imageUrl={imageUrl} />);
    });

    it('renders an image with provided URL', () => {
        expect(wrapper).toContainReact(<img src={imageUrl} />);
    });

    it('renders a span with the provided name', () => {
        expect(wrapper).toContainReact(<span>{name}</span>);
    });
});
