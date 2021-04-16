import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Display', () => {
  test('component is rendered correctly', () => {
    const displayTree = renderer.create(<Display />).toJSON();
    expect(displayTree).toMatchSnapshot();
  });
});
