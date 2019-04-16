//    Reverse the provided string.
// You may need to turn the string into an array before you can reverse it

function reverseString() {
  //Let get the new word going to be used
  let str = String(prompt("Enter You're Word"));

  // let reverseWord = reverseArray(str)
  let reverseWord = ReverseLoop(str)
  

  return alert("Here is your new word : " + reverseWord);
}

function reverseArray(str) {
 // Use the split() method to return a new array
 let splitString = str.split("");
 // Use the reverse() method to reverse the new created array
   let reverseArray = splitString.reverse();
 // Use the join() method to join all elements of the array into a string
   let joinArray = reverseArray.join("");

  // return str.split("").reverse().join("");
  return joinArray 
}

function ReverseLoop(str){
  // Create an empty string that will host the new created string
  let newString = ""

  // Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */

  for (var i = str.length - 1; i >= 0; i--) { 
    newString += str[i]; // or newString = newString + str[i];
  }
  return newString;
}

reverseString()