/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import CakeCard from '../cakeCard';
import CakeList from './cakeList';

const cakes = new Array(10).fill(null).map((val, i) => ({
    id: i,
    name: `cake-name-${i}`,
    imageUrl: `cake-image-url-${i}`,
    yumFactor: 3,
    comment: 'cake comment'
}));

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <CakeList loading={false} cakes={cakes} />
        </MemoryRouter>,
        div);
});

it('renders a CakeCard for each provided cake', () => {
    // this test will pass if for some reason cakes
    // isn't initialised correctly, so ensure that
    // at least one assertion is called
    expect.hasAssertions();
    const wrapper = shallow(<CakeList loading={false} cakes={cakes} />);

    cakes.forEach(cake => {
        expect(wrapper).toContainReact( <CakeCard {...cake} />);
    });
});

it('shows a loading message when loading is true', () => {
    const wrapper = shallow(<CakeList loading={true} cakes={cakes} />);
    expect(wrapper).toContainReact(<div className="loadingMsg">Loading...</div>);
});

it('shows a message when loading is false and cakes is null', () => {
    const wrapper = shallow(<CakeList loading={false} cakes={null} />);
    expect(wrapper).toContainReact(<div>No cakes!</div>);
});

it('shows a message when loading is false and cakes is empty', () => {
    const wrapper = shallow(<CakeList loading={false} cakes={[]} />);
    expect(wrapper).toContainReact(<div>No cakes!</div>);
});
