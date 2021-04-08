import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let results;
  try {
    const num1 = Big(+numberOne);
    const num2 = Big(+numberTwo);

    if (operation === '+') {
      results = Big(num1.plus(num2));
    }
    if (operation === '-') {
      results = Big(num1.minus(num2));
    }
    if (operation === 'X') {
      results = Big(num1.times(num2));
    }
    if (operation === '÷') {
      results = Big(num1.div(num2));
    }
    if (operation === '%') {
      results = Big(num1.div(num2));
    }
  } catch (error) {
    results = NaN;
  }
  return results.toPrecision().toString();
};
export default operate;
