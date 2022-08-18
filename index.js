var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("Enter your name? ");
console.log("namaste " + userName + '. Welcome to the ANDROID VS IOS FAN Quiz.');


function quiz(question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("YEAHH!! YOU'RE RIGHT!!");
    score = score + 1;
  } else {
    console.log("UMMM!! YOU'RE WRONG!!");
    score = score - 1;
  }
  console.log("you're final score is:", score);
  console.log("----------------------")
}


quiz("who have bigger user base android or ios? ", "android");

quiz("who have stable software?", "ios");

quiz("which company make IOS?", "apple");

quiz("who give more customization?", "android");
