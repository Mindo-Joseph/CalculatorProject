import operate from '../logic/operate';

describe('test operate funtions', () => {
  const num1 = 5;
  const num2 = 4;
  test('the sum of two numbers', () => {
    expect(operate(num1, num2, '+')).toEqual('9');
  });

  test('the subtraction between two numbers', () => {
    expect(operate(num1, num2, '-')).toEqual('1');
  });

  test('the division of two numbers', () => {
    expect(operate(num1, num2, '÷')).toBe('1.25');
  });
  test('the multiplication of two numbers', () => {
    expect(operate(num1, num2, 'X')).toBe('20');
  });
});
