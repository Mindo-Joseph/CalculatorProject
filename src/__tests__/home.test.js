import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Home from '../components/Home';

describe('Home', () => {
  test('renders the home component correctly', () => {
    const home = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});
