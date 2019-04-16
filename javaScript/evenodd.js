// Write a for loop that will iterate from 0 to 15
for (let x=0; x<=15; x++) {
  // For each iteration check if the number is odd or even
  if (x === 0) {
          console.log(x +  " is even");
  }
  // For each iteration check if the integer that is evenly divisible by 2
  else if (x % 2 === 0) {
          console.log(x + " is even");   
  }
  else {
          console.log(x + " is odd");
  }
}


//function isEven(n) {
//   n = Number(n);
//   return n === 0 || !!(n && !(n%2));
// }

// function isOdd(n) {
//   return isEven(Number(n) + 1);
// }