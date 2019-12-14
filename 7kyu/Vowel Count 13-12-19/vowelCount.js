/*
Vowel Count 

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  var vowelsCount = 0;
  // First we replace the white space
   
  str = str.replace(/\s+/g,'');
  //Split the string into an array
  let arr = str.split('');
// itterate through the array checking each position for a vowel letter 
//and incrementing count if found

  for(let i = 0; i < arr.length; i++){
      if(arr[i].match(/^(a|e|i|o|u)$/)){
          vowelsCount++;
      }
  }
  return vowelsCount;
}


//Tests

console.log(getCount("pear tree"), 4)