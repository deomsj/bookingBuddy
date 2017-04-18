import React from 'react';
import renderer from 'react-test-renderer';

import TripRoom from './TripRoom.jsx';
import {getTotal} from './APIsRouter';

it('renders correctly', () => {
  const tripRoom = renderer.create(
    <TripRoom />
  ).toJSON();
  expect(tripRoom).toMatchSnapshot();
});

it('get\'s totals', () => {
  var obj = {};
  getTotal(obj);

  setTimeout(() => {
    expect(obj.sum).toBe(4700);
  }, 500);
});