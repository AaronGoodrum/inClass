//Find the longest string from an given array of strings

function longest_string(str) {
  //split array up to find the longest string
  new_str = str.split(' ').replace(/[^0-9a-z]/gi, ' ')
  //will hold the longest string length
  let longestWord = 0

//create a loop to check each string length

  for( let i = 0; i < new_str.length; i++){
    //need to hold the longest word until replace
    if(new_str[i].length > longestWord){
      //true
      longestWord = new_str[i].length
      theword = new_str[i]
    }
  }
  console.log(new_str, longestWord, theword);
  
}
longest_string('Today I learn something new in code')
