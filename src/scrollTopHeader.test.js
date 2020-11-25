import React from 'react';
import Header from './Components/Header';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render share button Whatsapp", () => {
    const props = {
        disableHysteresis: true,
        
    }
    const app = mount(<Header {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
