import React from 'react';
import TripRoom from './TripRoom.jsx';
import getTotal from './getTotal';
import renderer from 'react-test-renderer';

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
  }, 3000);
});