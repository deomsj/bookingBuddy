import React from 'react';
import renderer from 'react-test-renderer';

import TripRoom from './TripRoom.jsx';
import Promise from 'bluebird';
var getTotal = Promise.promisify(require("./APIsRouter").getTotal);

it('renders correctly', () => {
  const tripRoom = renderer.create(
    <TripRoom />
  ).toJSON();
  expect(tripRoom).toMatchSnapshot();
});

it('get\'s totals', () => {
  var obj = {};
  getTotal(obj)
  .then(() => {
    expect(obj.sum).toBe(4700);
  });

});