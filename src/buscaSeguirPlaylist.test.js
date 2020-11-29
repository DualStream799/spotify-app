import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render barra de busca", () => {
    const props = {
        pesquisaPlaylist: false,
        
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
it("should render resultado busca", () => {
    const props = {
        pesquisaPlaylist: true,
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})

it("should render seguir playlist", () => {
    const props = {
        seguindo: true,
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
