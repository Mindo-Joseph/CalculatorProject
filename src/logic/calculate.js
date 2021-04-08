import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const result = data;

  if (/[0-9]/.test(buttonName)) {
    if (!total || total === '0') {
      result.total = buttonName;
    }
    if (total && total !== '0' && !next && !operation) {
      result.total += buttonName;
      if (buttonName === '0' && total === '0') result.total = total;
    }
    if (total && operation && (!next || next === '0')) {
      result.next = buttonName;
    }
    if (total && next && operation && next !== '0') {
      result.next += buttonName;
    }
  }
  if (buttonName === '.') {
    if (!total && !next) {
      result.total = '0.';
    }
    if (total && !next && total.indexOf('.') === -1) {
      result.total = `${total}.`;
    }
    if (next && next.indexOf('.') === -1) {
      result.next = `${next}.`;
    }
  }
  if (buttonName === '+/-') {
    if (total && !next) {
      result.total = operate(total, -1, 'X');
    }
    if (next) {
      result.next = operate(next, -1, 'X');
    }
  }
  if (buttonName === 'AC') {
    result.total = undefined;
    result.next = undefined;
    result.operation = undefined;
  }
  if (buttonName === '%') {
    if (total && !next) {
      result.total = operate(total, 100, '÷');
    }
    if (next) {
      result.next = operate(next, 100, '÷');
    }
  }
  if (['+', 'X', '-', '÷', '='].includes(buttonName)) {
    const newOperation = buttonName === '=' ? undefined : buttonName;
    if (total && next && operation) {
      result.total = operate(total, next, operation);
      result.next = undefined;
      result.operation = newOperation;
    }

    if (total && !next) {
      result.operation = buttonName;
    }
  }
  return result;
};

export default calculate;
