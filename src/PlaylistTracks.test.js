import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render minhas playlists com botão ver mais", () => {
    const props = {
        Userplaylist: true,
        PlaylistTracks: false
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})
it("should render ver mais", () => {
    const props = {
        Userplaylist: false,
        PlaylistTracks: true
    }
    const app = mount(<Home {...props} />)
    expect(toJson(app)).toMatchSnapshot()
})

