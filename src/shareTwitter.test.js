import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render share button Twitter", () => {
    const props = {
        shareTwitter: true,
        
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
