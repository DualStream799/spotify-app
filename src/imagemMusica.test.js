import React from 'react';
import Home from './Home';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';

it("should render imagens das músicas em Minhas Músicas", () => {
    const img = shallow(<img data-testid='musicImg'/>)
    expect(img).toMatchSnapshot()
})
