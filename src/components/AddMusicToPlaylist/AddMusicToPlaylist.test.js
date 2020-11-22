import React from 'react';
import {AddMusicToPlaylist} from "./AddMusicToPlaylist"
import Select from '@material-ui/core/Select';
import { shallow } from 'enzyme';



const rendered = shallow(<AddMusicToPlaylist playlists = {{"teste1": "1"}} classes = {{"root" : "white"}}/>);
const state = rendered.instance().state;


it("should render the Homepage for the logged in user (Heisenberg)", () => {
    expect(rendered.find(Select).props().value).toEqual(state.selectedPlaylist);
})
