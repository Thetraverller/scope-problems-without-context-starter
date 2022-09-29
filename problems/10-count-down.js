/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 3:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/

// your code here
// let countDownTimer = n =>{
//   // This structure allows for the changing of n within the inner function
//   // Maintains this change inside inner function while outer function n remains constant

//   let daysLeft = () => {     /// function in a function
//       if(n>0){
//           n--;
//           return daysLeft;
//       }else{
//           return "Happy New Year!";
//       }
//   }
//   return daysLeft();   ///closure
// }

let countDownTimer = n => {
       //console.log(n)

       let daysLeft = () => {
        if (n > 0) {
          n--;
          return daysLeft
         }
         else {
          return "Happy New Year!";
         }
       }
       return daysLeft()  //calling child function // to return days left when parent function is called
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

console.log(countDownTimer(0)); // prints "Happy New Year!"


let oneDay = countDownTimer(1); // returns a function    // declares oneDay as a child function of countDownTimer creating a private state
console.log(typeof oneDay)
console.log(oneDay()); // prints "Happy New Year!"


let twoDays = countDownTimer(2); // returns a function  // declares twoDays as a child function of its parent
console.log(typeof twoDays)
console.log(twoDays()); // returns a function
console.log(twoDays()); // prints "Happy New Year!"


let threeDays = countDownTimer(3); // returns a function  //declares threeDays as a child function of its parent, creating a private state
console.log(typeof threeDays)
console.log(threeDays()); // returns a function
console.log(threeDays()); // returns a function
console.log(threeDays()); // prints "Happy New Year!"


try {
module.exports = countDownTimer;
} catch (e) {
// catch the ref err
module.exports = null;
}
