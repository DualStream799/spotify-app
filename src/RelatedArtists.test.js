import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render artistas mais ouvidos por mim com botão related", () => {
    const props = {
        topArtistas: true,
        relatedArtistas: false
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
it("should render related", () => {
    const props = {
        topArtistas: false,
        relatedArtistas: true
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})

