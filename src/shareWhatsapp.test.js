import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render share button Whatsapp", () => {
    const props = {
        shareWpp: true,
        
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
