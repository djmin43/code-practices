// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the n-th number of the Fibonacci sequence.

// The 1st and 2nd number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.

// fib(n): 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// n:    : 1, 2, 3, 4, 5, 6,  7,  8,  9, ...

const fib = (n) => {
  if (n <= 2) return 1; 
  return fib(n -1) + fib(n-2);
}

console.log(fib(6))  // 8
console.log(fib(9)); // 34

// The problem of the recursive function is if the number is too large, the calculation takes long time.

// memoization
//  js object, keys will be arg to fn, value will be return value

const fibMemo = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log(fibMemo(50))