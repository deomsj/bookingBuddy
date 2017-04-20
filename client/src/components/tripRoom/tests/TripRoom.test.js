import React from 'react';
import renderer from 'react-test-renderer';

import TripRoom from '../TripRoom.jsx';

it('renders correctly', () => {
  const tripRoom = renderer.create(
    <TripRoom />
  ).toJSON();
  expect(tripRoom).toMatchSnapshot();
});