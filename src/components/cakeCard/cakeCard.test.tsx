/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CakeCard from './cakeCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CakeCard name="" imageUrl="" />, div);
});

it('renders an image with provided URL', () => {
    const imageUrl = 'cake-image-url';
    const wrapper = shallow(<CakeCard name="" imageUrl={imageUrl} />);
    expect(wrapper).toContainReact(<img src={imageUrl} />);
});

it('renders a span with the provided name', () => {
    const name = 'cake-name';
    const wrapper = shallow(<CakeCard name={name} imageUrl="" />);
    expect(wrapper).toContainReact(<span>{name}</span>);
});
