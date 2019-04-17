//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function findNum (k){
  let arr = [10,15,3,7,5]
  // looping start
for (i=0; i<arr.length; i++){

  //executes the callback 
  //function once for each index of the array until it finds one where callback returns a true value
  if (arr.find((sum) => {
    console.log(sum, arr[i],k);
    //Will index each item (arr[i]+arr[i] until it finds a match is true)
    return k-arr[i] === sum
    
  })) return console.log(k + ' true');
} 
return false;
}

findNum(17)