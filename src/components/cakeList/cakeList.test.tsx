/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import CakeCard from '../cakeCard';
import CakeList from './cakeList';

const cakes = new Array(10).fill(null).map((val, i) => ({
    id: i,
    name: `cake-name-${i}`,
    imageUrl: `cake-image-url-${i}`
}));

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CakeList cakes={cakes} />, div);
});

describe('when rendered', () => {
    let wrapper: ShallowWrapper<{}, {}>;
    
    beforeAll(() => {
        wrapper = shallow(<CakeList cakes={cakes} />);
    });

    it('renders a CakeCard for each provided cake', () => {
        // this test will pass if for some reason cakes
        // isn't initialised correctly, so ensure that
        // at least one assertion is called
        expect.hasAssertions();

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
});
