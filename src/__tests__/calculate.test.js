import calculate from '../logic/calculate';

describe('test calculate function', () => {
  test('Add two numbers after pressing the equal sign', () => {
    const result = calculate({ total: '2', next: '2', operation: '+' }, '=');
    const { total } = result;
    expect(total).toEqual('4');
  });
  test('Subtract two numbers after pressing equal sign', () => {
    const result = calculate({ total: '4', next: '1', operation: '-' }, '=');
    const { total } = result;
    expect(total).toBe('3');
  });
  test('Multiplication of rwo numbers after pressing equal sign', () => {
    const result = calculate({ total: '8', next: '1', operation: 'X' }, '=');
    const { total } = result;
    expect(total).toBe('8');
  });
  test('Division between two numbers after pressing equal sign', () => {
    const result = calculate({ total: '6', next: '3', operation: '÷' }, '=');
    const { total } = result;
    expect(total).toBe('2');
  });
  test('Make a positive number negative when presssing the +/- button', () => {
    const result = calculate({ total: '5', next: '', operation: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('-5');
  });
  test('Make a negative number positive when presssing the +/- button', () => {
    const result = calculate({ total: '-5', next: '', operation: '' }, '+/-');
    const { total } = result;
    expect(total).toEqual('5');
  });
  test('Converting a number to its percentage form', () => {
    const result = calculate({ total: '5', next: '', operation: '' }, '%');
    const { total } = result;
    expect(total).toEqual('0.05');
  });
  test('Adding a decimal point to a number', () => {
    const result = calculate({ total: '2', next: '', operation: '' }, '.');
    const { total } = result;
    expect(total).toBe('2.');
  });
});
