import React from 'react';
import renderer from 'react-test-renderer';

import Profile from '../Profile.jsx';

it('renders correctly', () => {
  const profile = renderer.create(
    <Profile />
  ).toJSON();
  expect(profile).toMatchSnapshot();
});