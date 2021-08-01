function multiply (a, b) {
  return a * b
}

function multiplyX (x) {
  return function (a) {
    return multiply (a, x)
  }
}

function add (a, b) {
  return a + b
}

function addX (x) {
  return function (a) {
    return add (a, x)
  }
}

const multiplyTwo = multiplyX(2)
const multiplyThree = multiplyX(3)
const addFour = addX(4)

const formula = [
  multiplyThree,
  multiplyThree,
  addFour,
].reduce(function(prevFunc, nextFunc) {
  return function(x) {
    // 연산
    return nextFunc(prevFunc(x))
  }
}, k => k)
