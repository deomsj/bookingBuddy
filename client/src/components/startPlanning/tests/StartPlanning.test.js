import React from 'react';
import renderer from 'react-test-renderer';

import StartPlanning from '../StartPlanning.jsx';

it('renders correctly', () => {
  const startPlanning = renderer.create(
    <StartPlanning />
  ).toJSON();
  expect(startPlanning).toMatchSnapshot();
});