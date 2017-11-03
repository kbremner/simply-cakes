/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import AddCake from '../../components/addCake';
import { AddCakeContainer } from './addCakeContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddCakeContainer createCake={jest.fn()} saving={false} />, div);
});

describe('AddCake component', () => {
    let wrapper: ShallowWrapper<{}, {}>;
    let createCake: jest.Mock<{}>;

    beforeEach(() => {
        createCake = jest.fn();
        wrapper = shallow(<AddCakeContainer createCake={createCake} saving={true} />).find(AddCake);
    });

    it('is rendered with cake property', () => {
        expect(wrapper).toHaveProp('cake');
    });
    
    it('is rendered with onChange property', () => {
        expect(wrapper).toHaveProp('onChange');
    });
    
    it('is rendered with save property', () => {
        expect(wrapper).toHaveProp('save');
    });

    it('is rendered with saving property', () => {
        expect(wrapper).toHaveProp('saving', true);
    });

    it('triggers a save when AddCake calls save property', () => {
        (wrapper.prop('save') as () => void)();
        expect(createCake).toHaveBeenCalledTimes(1);
    });
});
