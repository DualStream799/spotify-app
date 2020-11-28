import React from 'react';
import Home from './Home';
import App from './App';
import { mount, render } from '@testing-library/react';
import toJson from "enzyme-to-json"
import Select from '@material-ui/core/Select';
import { GolfCourseSharp } from '@material-ui/icons';

it("should render página de cadastro do Spotify em uma janela externa", () => {
    // const open = jest.fn()
    // Object.defineProperty(window, 'open', open);

    global.open = jest.fn()
    const { getByTestId } = render(<App />)
    const cadastroBtn = getByTestId('cadastro')
    expect(cadastroBtn).toBeInTheDocument()
    cadastroBtn.click()
    expect(global.open).toBeCalled()
})