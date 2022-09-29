/***********************************************************************
Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function.
When invoked the function returned by hiddenCounter will increment the counter by 1.

Look below to see how this function is invoked:

let hidden1 = hiddenCounter(); //returns a function
hidden1(); // returns 1
hidden1(); // returns 2

let hidden2 = hiddenCounter(); // returns a function
hidden2(); // returns 1


***********************************************************************/

// your code here!
// let hiddenCounter = function() {             // parent function
//        let count = 0;

//        return function() {                //child finction
//         count++
//         return count
//        }
// }

let hiddenCounter = function() {
    let count = 0;                 // variable child function has access to

    return function child () {
    count++
    return count
    }

}
//-----------------------

let hidden1 = hiddenCounter(); //returns a function   // private state for hidden1 variable  //initialise child function as hidden1
console.log(hidden1()); // returns 1
console.log(hidden1()); // returns 2

let hidden2 = hiddenCounter(); // returns a function // private state for hidden2 variable //initialise child function as hidden 2
console.log(hidden2()); // returns 1
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hiddenCounter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
