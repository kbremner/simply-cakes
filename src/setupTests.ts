import 'jest-enzyme';
// see comments in this file for more details about why it is required
import './shim';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
