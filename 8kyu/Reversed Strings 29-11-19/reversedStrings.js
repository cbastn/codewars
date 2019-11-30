/*
Reversed Strings

Complete the solution so that it reverses the string value passed into it.

solution('world'); // returns 'dlrow'

*/

function solution(str){
    reversedString = ''; // variable for reversed string
    
  for(let i = str.length-1; i >= 0; i--){ //iterated through string starting at the end

      reversedString += str[i]; // add each letter to the reserved string variable

  }
  return reversedString; // return reversed string
}

//Test

console.log(solution('world') == 'dlrow')