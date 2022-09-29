/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

// your code here!

let interrupter = (word) => {
    let words;             // for carity declare variable inside parent function

    return function child(string) {
      let newString = string.split(" ").join(" " + word + " ")
      return newString
    }
}


//-------------------
let rudePerson = interrupter("what"); // => returns a function    // private state for rudePerson var// initalised as a child function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


// Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function //private state for rudePerson2 var// initialised as a  child function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
