import React, { Component } from 'react';
import {AddMusicToPlaylist} from "./AddMusicToPlaylist"
import Select from '@material-ui/core/Select';
import { shallow } from 'enzyme';



const rendered = shallow(<AddMusicToPlaylist playlists = {{"teste1": "1"}} classes = {{"root" : "white"}}/>);
const state = rendered.instance().state;


it("props value should be tha same as state", () => {
    expect(rendered.find(Select).props().value).toEqual(state.selectedPlaylist);
})
