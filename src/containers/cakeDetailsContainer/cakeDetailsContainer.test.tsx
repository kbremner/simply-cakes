/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import Cake from '../../models/cake';
import CakeDetails from '../../components/cakeDetails';
import { CakeDetailsContainer } from './cakeDetailsContainer';

const cake: Cake = {
    id: 123,
    name: 'Test Cake',
    imageUrl: 'test-image-url',
    yumFactor: 4,
    comment: 'Test cake comment'
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <CakeDetailsContainer
            cake={cake}
            getCake={jest.fn()}
            loading={false}
            match={{ params: { id: 123 }}}
        />,
        div);
});

describe('CakeDetails component', () => {
    let wrapper: ShallowWrapper<{}, {}>;
    let getCake: jest.Mock<{}>;

    beforeEach(() => {
        getCake = jest.fn();
        wrapper = shallow(
            <CakeDetailsContainer
                getCake={getCake}
                match={{ params: { id: 123 }}}
                cake={cake}
                loading={true}
            />).find(CakeDetails);
    });

    it('is rendered with name property', () => {
        expect(wrapper).toHaveProp('name', cake.name);
    });
    
    it('is rendered with imageUrl property', () => {
        expect(wrapper).toHaveProp('imageUrl', cake.imageUrl);
    });
    
    it('is rendered with yumFactor property', () => {
        expect(wrapper).toHaveProp('yumFactor', cake.yumFactor);
    });
    
    it('is rendered with comment property', () => {
        expect(wrapper).toHaveProp('comment', cake.comment);
    });

    it('is rendered with loading property', () => {
        expect(wrapper).toHaveProp('loading', true);
    });

    it('triggers a save when component mounts', () => {
        expect(getCake).toHaveBeenCalledTimes(1);
        expect(getCake).toHaveBeenCalledWith(cake.id);
    });
});
