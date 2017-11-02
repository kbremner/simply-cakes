import 'jest-enzyme';
import { configure } from 'enzyme';
// see https://github.com/airbnb/enzyme/pull/1264 for more info behind
// why we need to import the constructor like this
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
