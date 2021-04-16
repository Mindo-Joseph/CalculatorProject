import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';

const clickHandler = () => { ''; };

test('Check if the button role is a button', () => {
  const { getByRole } = render(<Button name="=" wide={false} color={false} clickHandler={clickHandler} />);
  const equalBtn = getByRole('button');
  expect(equalBtn).toBeInTheDocument();
});

test('Checking if it renders the button texts correctly', () => {
  const { getByText } = render(<Button name="=" wide={false} color={false} clickHandler={clickHandler} />);
  const eqlBtn = getByText(/=/i);
  expect(eqlBtn).toBeInTheDocument();
});
