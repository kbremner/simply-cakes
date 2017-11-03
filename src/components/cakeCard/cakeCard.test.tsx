/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import CakeCard from './cakeCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <CakeCard id={0} name="" imageUrl="" yumFactor={3} comment="" />
        </MemoryRouter>,
        div);
});

describe('when rendered', () => {
    const id = 123;
    const imageUrl = 'cake-image-url';
    const name = 'cake-name';
    let wrapper: ShallowWrapper<{}, {}>;
    
    beforeAll(() => {
        wrapper = shallow(<CakeCard id={id} name={name} imageUrl={imageUrl} yumFactor={3} comment="" />);
    });

    it('renders an image with provided URL', () => {
        const imageWrapper = wrapper.find('img');
        expect(imageWrapper).toHaveProp('src', imageUrl);
    });

    it('renders a span with the provided name', () => {
        expect(wrapper).toContainReact(<span>{name}</span>);
    });

    it('renders a Link element pointing to details page for cake', () => {
        const linkWrapper = wrapper.find(Link);
        expect(linkWrapper).toHaveProp('to', `/${id}`);
    });
});
