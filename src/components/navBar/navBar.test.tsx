/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import NavBar from './navBar';

const addIcon = require('./icons/ic_add_white_24px.svg');
const backIcon = require('./icons/ic_navigate_before_white_24px.svg');

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter><NavBar location={{ pathname: '/' }} /></MemoryRouter>, div);
});

describe('when rendered at home screen', () => {
    let wrapper: ShallowWrapper<{}, {}>;

    beforeEach(() => {
        wrapper = shallow(<NavBar location={{ pathname: '/' }} />);
    });
    
    it('renders the web app title', () => {
        expect(wrapper).toContainReact(<span>{process.env.REACT_APP_NAME}</span>);
    });

    it('renders a link to the add screen', () => {
        const linkWrapper = wrapper.find(Link);
        expect(linkWrapper).toHaveProp('to', '/add');
    });
    
    it('renders an image in the link', () => {
        const imgWrapper = wrapper.find(Link).find('img');
        expect(imgWrapper).toHaveProp('src', addIcon);
    });
});

describe('when rendered at path other than home screen', () => {
    let wrapper: ShallowWrapper<{}, {}>;

    beforeEach(() => {
        wrapper = shallow(<NavBar location={{ pathname: '/otherpath' }} />);
    });
    
    it('renders an image in the link', () => {
        const imgWrapper = wrapper.find(Link).find('img');
        expect(imgWrapper).toHaveProp('src', backIcon);
    });
});
