import React from 'react';
import Home from './Home';
import { mount } from 'enzyme';
import toJson from "enzyme-to-json"

it("ensure the follow button is properly rendered", () => {
    const props = {
        topArtistas: true,
        relatedArtistas: false
    }
    const app = mount(<Home {...props} />)
    expect(app.exists('.follow_artist')).to.equal(true)
})

it("ensures the player is properly rendered", () => {
    const props = {}
    const app = mount(<Home {...props} />)
    expect(app.exists('.player')).to.equal(true)
})

