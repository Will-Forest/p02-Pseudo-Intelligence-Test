//Author: Will F Forest
//Math.random/Math.floor methods courtesy of W3Schools at:
// http://www.w3schools.com/jsref/jsref_random.asp
var firstNum= Math.floor((Math.random() * 20) + 1)
var secondNum= Math.floor((Math.random() * 20) + 1)
var thirdNum= Math.floor((Math.random() * 20) + 1)
var fourthNum= Math.floor((Math.random() * 20) + 1)
var fifthNum= Math.floor((Math.random() * 20) + 1)
var sixthNum= Math.floor((Math.random() * 20) + 1)
var seventhNum= Math.floor((Math.random() * 20) + 1)
var eighthNum= Math.floor((Math.random() * 20) + 1)
var ninthNum= Math.floor((Math.random() * 20) + 1)
var tenthNum= Math.floor((Math.random() * 20) + 1)
var eleventhNum= Math.floor((Math.random() * 20) + 1)
var twelvthNum= Math.floor((Math.random() * 20) + 1)
var userGuess= document.getElementById("userGuess").innerHTML
var testEquationOne= (eleventhNum + twelvthNum).toString() +
(eleventhNum * twelvthNum).toString() + (eleventhNum / twelvthNum).toFixed(2).toString()
var testEquationTwo= (twelvthNum - eleventhNum).toString() + (eleventhNum + twelvthNum).toString() +
(twelvthNum / eleventhNum).toFixed(2).toString()
var testEquationThree=  (eleventhNum * twelvthNum).toString() + (eleventhNum + twelvthNum).toString() +
  (eleventhNum / twelvthNum).toString()
var guesses= 0
function firstEquation () {
  console.log(firstNum +" " + secondNum)
document.getElementById("firstExample").innerHTML= firstNum + " + " + secondNum + "=" +
((firstNum + secondNum).toString() + (firstNum * secondNum).toString() +
(firstNum / secondNum).toFixed(2).toString());
document.getElementById("secondExample").innerHTML= thirdNum + " + " + fourthNum + "=" +
((thirdNum + fourthNum).toString() + (thirdNum * fourthNum).toString() +
(thirdNum / fourthNum).toFixed(2).toString());
document.getElementById("thirdExample").innerHTML= fifthNum + " + " + sixthNum + "=" +
((fifthNum + sixthNum).toString() + (fifthNum * sixthNum).toString() +
(fifthNum / sixthNum).toFixed(2).toString());
document.getElementById("fourthExample").innerHTML= seventhNum + " + " + eighthNum + "=" +
((seventhNum + eighthNum).toString() + (seventhNum * eighthNum).toString() +
(seventhNum / eighthNum).toFixed(2).toString());
document.getElementById("fifthExample").innerHTML= ninthNum + " + " + tenthNum + "=" +
((ninthNum + tenthNum).toString() + (ninthNum * tenthNum).toString() +
(ninthNum / tenthNum).toFixed(2).toString());
document.getElementById("test").innerHTML= eleventhNum + " + " + twelvthNum + "="
console.log(testEquationOne)
}
function PITOne() {
if (userGuess ==  testEquationOne)
{ document.getElementById("success").innerHTML=
  "Congrats! Ready for the next question?"
}
else {
  guesses=guesses + 1
  window.alert("Sorry, wrong answer. Try again!")
}
}
function secondEquation () {
  document.getElementById("firstExample").innerHTML= firstNum + " + " + secondNum + "=" +
  ((secondNum - firstNum).toString() + (firstNum + secondNum).toString() +
  (secondNum / firstNum).toFixed(2).toString());
  document.getElementById("secondExample").innerHTML= thirdNum + " + " + fourthNum + "=" +
  ((fourthNum - thirdNum).toString() + (thirdNum + fourthNum).toString() +
  (fourthNum / thirdNum).toFixed(2).toString());
  document.getElementById("thirdExample").innerHTML= fifthNum + " + " + sixthNum + "=" +
  ((sixthNum - fifthNum).toString() + (fifthNum + sixthNum).toString() +
  (sixthNum / fifthNum).toFixed(2).toString());
  document.getElementById("fourthExample").innerHTML= seventhNum + " + " + eighthNum + "=" +
  ((eighthNum - seventhNum).toString() + (seventhNum + eighthNum).toString() +
  (eighthNum / seventhNum).toFixed(2).toString());
  document.getElementById("fifthExample").innerHTML= ninthNum + " + " + tenthNum + "=" +
  ((tenthNum - ninthNum).toString() + (ninthNum + tenthNum).toString() +
  (tenthNum / ninthNum).toFixed(2).toString());
  document.getElementById("test").innerHTML= eleventhNum + " + " + twelvthNum + "="
  console.log(testEquationTwo)
}

function PITTwo() {
if (userGuess ==  testEquationTwo)
{ document.getElementById("success").innerHTML=
  "Congrats! Ready for the next question?"
}
else {
  guesses= guesses + 1
  window.alert("Sorry, wrong answer. Try again!")
}
}
function thirdEquation () {
  document.getElementById("firstExample").innerHTML= firstNum + " + " + secondNum + "=" +
  ((firstNum * secondNum).toString() + (firstNum + secondNum).toString() +
  (firstNum / secondNum).toFixed(2).toString());
  document.getElementById("secondExample").innerHTML= thirdNum + " + " + fourthNum + "=" +
  ((thirdNum * fourthNum).toString() + (thirdNum + fourthNum).toString() +
  (thirdNum / fourthNum).toFixed(2).toString());
  document.getElementById("thirdExample").innerHTML=  fifthNum + " + " + sixthNum + "=" +
  ((fifthNum * sixthNum).toString() + (fifthNum + sixthNum).toString() +
  (fifthNum / sixthNum).toFixed(2).toString());
  document.getElementById("fourthExample").innerHTML= seventhNum + " + " + eighthNum + "=" +
  ((seventhNum * eighthNum).toString() + (seventhNum + eighthNum).toString() +
  (seventhNum / eighthNum).toFixed(2).toString());
  document.getElementById("fifthExample").innerHTML= ninthNum + " + " + tenthNum + "=" +
  ((ninthNum * tenthNum).toString() + (ninthNum + tenthNum).toString() +
  (ninthNum / tenthNum).toFixed(2).toString());
  document.getElementById("test").innerHTML= eleventhNum + " + " + twelvthNum + "="
  console.log(TestEquationThree)
}
function PITThree() {
if (userGuess ==  testEquationThree)
{ document.getElementById("success").innerHTML=
  "Congrats! You're smart! You only had " + guesses " wrong guesses!"
}
else {
  guesses= guesses + 1
  window.alert("Sorry, wrong answer. Try again!")
}
}
