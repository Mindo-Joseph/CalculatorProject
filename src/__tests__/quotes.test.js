import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Quotes from '../components/Quote';

describe('Quotes', () => {
  test('renders the quotes component correctly', () => {
    const quote = renderer.create(
      <BrowserRouter>
        <Quotes />
      </BrowserRouter>,
    ).toJSON();
    expect(quote).toMatchSnapshot();
  });
});
