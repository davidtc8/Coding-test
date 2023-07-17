let once = (fn) => {
  // For this I checked the following forum in Stack Overflow https://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once

  // Initializing variables
  let beenCalled = false;
  let answer;

  return (...params) => {
    // If the function hasn't been called
    if (!beenCalled) {
      // Change the var 'beenCalled' to true
      beenCalled = true;
      // resolve the function
      answer = fn(...params);
    }

    // Return the values of the sum
    return answer;
  };
};

const sum = (a, b) => a + b;
const onceSum1 = once(sum);
const onceSum2 = once(sum);

console.log(onceSum1(1, 3)); // => 4
console.log(onceSum1(5, 3)); // => 4
console.log(onceSum2(2, 7)); // => 9
console.log(onceSum2(5, 2)); // => 9
