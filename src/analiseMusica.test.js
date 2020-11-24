import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render minhas musicas com botão analise", () => {
    const props = {
        likedTracks: true,
        boolean_analise: false
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
it("should render analise", () => {
    const props = {
        likedTracks: false,
        boolean_analise: true
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})

