/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:

const halfer = dynamicDivide(2); // returns a function
halfer(20); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10


***********************************************************************/

// your code here

let dynamicDivide = (divisor) => {   //pF

  return function child(num) {     //cF
    return num / divisor
  }

}
//-------------------
const halfer = dynamicDivide(2); // returns a function  // halfer invokes child function in a private state with declared param of pF
console.log(halfer(20)); // returns 10

const divideByThree = dynamicDivide(6);      // divby3 invokes child function in a private state with declared param of pF
console.log(divideByThree(30)); // returns 5

const  divideByFive = dynamicDivide(5);     // divby5 invokes child function in a private state with declared param of pF
console.log(divideByFive(60)); // returns 12
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = dynamicDivide;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
