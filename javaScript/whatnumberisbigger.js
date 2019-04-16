// Prompt the user to imput 2 number and store them in 2 Veriables
// Write a IF / Else statment that will compare the 2 variabls and display the greater one.

function checknumbers (){

  //Getting input from user with prompts
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

  //Compare numbers with conditional operator statement - true or false
  //variablename = (condition) ? value1:value2 
numberVar = ( a < b ) ? alert(b +" bigger then " + a) : alert(a +" bigger then " + b)

}

//Calling function
checknumbers()

// https://www.w3schools.com/js/js_comparisons.asp

// if (isNaN(a) || isNaN(b)) {
//   nonNum = alert("Input is not a number")
// } else {
//      //Compare numbers with conditional operator statement - true or false
//     //variablename = (condition) ? value1:value2 
//     numberVar = ( a < b ) ? alert(" B bigger then A -"+ b) : alert("A was bigger then B -" + a)
// }