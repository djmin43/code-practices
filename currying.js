function multiply(a, b) {
  return a * b;
};

function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
};

const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);