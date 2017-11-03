/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import CakeDetails from './cakeDetails';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <CakeDetails
            id={0}
            name="Test Cake"
            imageUrl="https://testcake/image.png"
            yumFactor={3}
            comment="Test Cake Comment"
            loading={false}
        />,
        div);
});

describe('when rendered', () => {
    const id = 123;
    const imageUrl = 'cake-image-url';
    const name = 'cake-name';
    const yumFactor = 2;
    const comment = 'Test cake comment.';
    let wrapper: ShallowWrapper<{}, {}>;
    
    beforeAll(() => {
        wrapper = shallow(
            <CakeDetails
                id={id}
                name={name}
                imageUrl={imageUrl}
                yumFactor={yumFactor}
                comment={comment}
                loading={false}
            />);
    });

    it('renders an image with provided URL', () => {
        const imageWrapper = wrapper.find('img');
        expect(imageWrapper).toHaveProp('src', imageUrl);
    });

    it('renders a div with the provided name', () => {
        expect(wrapper).toContainReact(<span>{name}</span>);
    });
    
    it('renders a div with the provided yum factor', () => {
        expect(wrapper).toContainReact(<span>{yumFactor}</span>);
    });

    it('renders a div with the provided comment', () => {
        expect(wrapper).toContainReact(<span>{comment}</span>);
    });
});

describe('when loading', () => {
    const id = 123;
    const imageUrl = 'cake-image-url';
    const name = 'cake-name';
    const yumFactor = 2;
    const comment = 'Test cake comment.';
    let wrapper: ShallowWrapper<{}, {}>;
    
    beforeAll(() => {
        wrapper = shallow(
            <CakeDetails
                id={id}
                name={name}
                imageUrl={imageUrl}
                yumFactor={yumFactor}
                comment={comment}
                loading={true}
            />);
    });

    it('render a loading message', () => {
        expect(wrapper).toContainReact(<span>Loading...</span>);
    });
});
