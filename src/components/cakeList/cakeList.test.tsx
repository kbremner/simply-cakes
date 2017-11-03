/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CakeCard from '../cakeCard';
import CakeList from './cakeList';

const cakes = new Array(10).fill(null).map((val, i) => ({
    id: i,
    name: `cake-name-${i}`,
    imageUrl: `cake-image-url-${i}`
}));

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CakeList loading={false} cakes={cakes} />, div);
});

it('renders a CakeCard for each provided cake', () => {
    // this test will pass if for some reason cakes
    // isn't initialised correctly, so ensure that
    // at least one assertion is called
    expect.hasAssertions();
    const wrapper = shallow(<CakeList loading={false} cakes={cakes} />);

    cakes.forEach(cake => {
        expect(wrapper).toContainReact((
            <CakeCard
                id={cake.id}
                name={cake.name}
                imageUrl={cake.imageUrl}
            />
        ));
    });
});

it('shows a loading message when loading is true', () => {
    const wrapper = shallow(<CakeList loading={true} cakes={cakes} />);
    expect(wrapper).toContainReact(<div>Loading...</div>);
});

it('shows a message when loading is false and cakes is null', () => {
    const wrapper = shallow(<CakeList loading={false} cakes={null} />);
    expect(wrapper).toContainReact(<div>No cakes!</div>);
});

it('shows a message when loading is false and cakes is empty', () => {
    const wrapper = shallow(<CakeList loading={false} cakes={[]} />);
    expect(wrapper).toContainReact(<div>No cakes!</div>);
});
