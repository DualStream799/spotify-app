import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import renderer from 'react-test-renderer';

describe('Dark Mode Button ', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <DarkModeToggle>
        Dark Mode
      </DarkModeToggle>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});