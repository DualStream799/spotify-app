import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("It should render home when not logged in", () => {
    const props = {
        isLoggedIn: false,
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})