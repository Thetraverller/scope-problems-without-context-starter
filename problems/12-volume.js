/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.



***********************************************************************/

// your code here

let recVolume = (height) => {
      let count = 0
      let width;
      let breadth;

      let volume = (measurement) => {   // child function has beeen declared
        count++

        if (count === 1) {    // each time a measurememnt is taken in count increases by 1
          width = measurement // so new measurement can be placed in the next variable
          return volume       //until no longer necessary
        }
        else if (count === 2) {
          breadth = measurement
          return height * width * breadth
        }
        else {
          return height * width * breadth
        }
      }
      return volume;
}

// Example 1:
let table1 = recVolume(5); // returns a function  // table1 === the volume child function in a private state
console.log(table1(4)); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60  

// Example 2:
let table2 = recVolume(3); // returns a function // table2 invokes the childfunction of volume in a private state
console.log(table2(2)); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
