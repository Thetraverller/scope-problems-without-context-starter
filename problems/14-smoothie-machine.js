/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// your code here


let smoothieMachine = (...ingredients1) => {    //pF
  let order = "I'm having a smoothie with "

        let smoothie = (...ingredients2) => {      //cF
          let ings1 = ingredients1.join(" and ")
          let ings2  = ingredients2.join(" and ")   
          if(ings1.length > 0 && ings2.length > 0) {
            return order + ings1 + " and " + ings2
          }
          else{
          return order + ings1 + ings2
          }
        }

        return smoothie;

}
//---------------------------------------
let smoothie1 = smoothieMachine();   // smoothie1 invokes the child function: smoothie with no declared params in a private state

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries"); // smoothie2 invokes the child function: smoothie with declared params in a private state
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
