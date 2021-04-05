const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const result = data;

  if (buttonName === '+/-') {
    if (total && !next) {
      result.total = total * -1;
    }
    if (next) {
      result.next = next * -1;
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      result.total = '0.';
    }
    if (total && !next && total.indexOf('.') === -1) {
      result.total = `${total}.`;
    }
    if (next && next.indexOf('.') === 1) {
      result.next = `${next}.`;
    }
  }
  if (buttonName === 'AC') {
    result.total = '';
    result.next = '';
    result.operation = '';
  }
};

export default calculate;
