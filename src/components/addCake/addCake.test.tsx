/// <reference types="jest-enzyme" />
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import Cake from '../../models/cake';
import AddCake from './addCake';

const cake: Cake = {
    id: 2,
    name: 'Test Cake',
    imageUrl: 'http://some-cake/image.png',
    comment: 'Comment for test cake',
    yumFactor: 4
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddCake cake={cake} onChange={jest.fn()} save={jest.fn()} saving={false} />, div);
});

describe('when rendered', () => {
    let onChange: jest.Mock<{}>;
    let save: jest.Mock<{}>;
    let wrapper: ShallowWrapper<{}, {}>;
    
    beforeEach(() => {
        onChange = jest.fn();
        save = jest.fn();
        wrapper = shallow(<AddCake cake={cake} onChange={onChange} save={save} saving={false} />);
    });

    describe('image URL input', () => {
        let inputWrapper: ShallowWrapper<{}, {}>;

        beforeEach(() => {
            inputWrapper = wrapper.find('.imageUrlInput');
        });

        it('is rendered with provided value', () => {
            expect(inputWrapper).toHaveProp('value', cake.imageUrl);
        });

        it('fires on change when value is changed', () => {
            const newUrl = 'http://new-url/image.jpg';
            inputWrapper.simulate('change', { currentTarget: { value: newUrl }});
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith({ ...cake, imageUrl: newUrl });
        });
    });
    
    describe('name input', () => {
        let inputWrapper: ShallowWrapper<{}, {}>;

        beforeEach(() => {
            inputWrapper = wrapper.find('.nameInput');
        });

        it('is rendered with provided value', () => {
            expect(inputWrapper).toHaveProp('value', cake.name);
        });

        it('fires on change when value is changed', () => {
            const newName = 'New Test Cake Name';
            inputWrapper.simulate('change', { currentTarget: { value: newName }});
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith({ ...cake, name: newName });
        });
    });
    
    describe('yum factor input', () => {
        let inputWrapper: ShallowWrapper<{}, {}>;

        beforeEach(() => {
            inputWrapper = wrapper.find('.yumFactorInput');
        });

        it('is rendered with provided value', () => {
            expect(inputWrapper).toHaveProp('value', cake.yumFactor);
        });

        it('fires on change when value is changed', () => {
            const newYumFactor = 2;
            inputWrapper.simulate('change', { currentTarget: { value: newYumFactor }});
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith({ ...cake, yumFactor: newYumFactor });
        });
    });
    
    describe('comment input', () => {
        let inputWrapper: ShallowWrapper<{}, {}>;

        beforeEach(() => {
            inputWrapper = wrapper.find('.commentInput');
        });

        it('is rendered with provided value', () => {
            expect(inputWrapper).toHaveProp('value', cake.comment);
        });

        it('fires on change when value is changed', () => {
            const newComment = 'New comment about test cake';
            inputWrapper.simulate('change', { currentTarget: { value: newComment }});
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(onChange).toHaveBeenCalledWith({ ...cake, comment: newComment });
        });
    });
    
    describe('save button', () => {
        let buttonWrapper: ShallowWrapper<{}, {}>;

        beforeEach(() => {
            buttonWrapper = wrapper.find('.saveButton');
        });

        it('is rendered', () => {
            expect(buttonWrapper).toBePresent();
        });

        it('fires save when clicked', () => {
            buttonWrapper.simulate('click');
            expect(save).toHaveBeenCalledTimes(1);
        });
    });

    it('does not contain loading message', () => {
        expect(wrapper.find('.savingMsg')).not.toBePresent();
    });
});

describe('when saving', () => {
    let wrapper: ShallowWrapper<{}, {}>;
    
    beforeEach(() => {
        wrapper = shallow(<AddCake cake={cake} onChange={jest.fn()} save={jest.fn()} saving={true} />);
    });

    it('does not render save button', () => {
        expect(wrapper.find('.saveButton')).not.toBePresent();
    });

    it('renders saving message', () => {
        expect(wrapper).toContainReact(<div className="savingMsg">Saving...</div>);
    });
});
