import React from 'react';
import renderer from 'react-test-renderer';

import LandingPage from '../LandingPage.jsx';

it('renders correctly', () => {
  const landingPage = renderer.create(
    <LandingPage />
  ).toJSON();
  expect(landingPage).toMatchSnapshot();
});