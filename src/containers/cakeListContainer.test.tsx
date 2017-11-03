/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CakeList from '../components/cakeList';
import { CakeListContainer } from './cakeListContainer';

const cakes = new Array(10).fill(null).map((val, i) => ({
    id: i,
    name: `cake-name-${i}`,
    imageUrl: `cake-image-url-${i}`,
    yumFactor: 3,
    comment: 'cake comment'
}));

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CakeListContainer cakes={cakes} loading={false} loadCakes={jest.fn()} />, div);
});

it('loads cakes when component is mounted', () => {
    const loadCakes = jest.fn();
    shallow(<CakeListContainer cakes={cakes} loading={false} loadCakes={loadCakes} />);
    expect(loadCakes).toHaveBeenCalledTimes(1);
});

it('renders a CakeList with the required props', () => {
    const wrapper = shallow(<CakeListContainer cakes={cakes} loading={true} loadCakes={jest.fn()} />);
    expect(wrapper).toContainReact(<CakeList loading={true} cakes={cakes} />);
});
