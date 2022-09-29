/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

// your code here

// function lazyAdder(num1) {             //initialise func1
//       function add(num2) {              ////initialise func2   func in a func
//         return function finalAdd(num3) {  ////initialise func3 func in a func in a func
//           return num1 +num2 + num3
//         }
//       }
//       return add
// }

let lazyAdder = num1 => {

  function childAdd(num2) {             //child function that needs to be returned at the end
    return function childAdd2(num3) {
      return num1 + num2 + num3            // return child function in a child function
    }
  }

  return childAdd               // initial child function being returned
}

//-------------------
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);         
console.log(sum); // prints 6

// Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
