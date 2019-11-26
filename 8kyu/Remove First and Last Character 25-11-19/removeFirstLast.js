/*
Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

function removeChar(str){
    //Using the substring method to grab between the first and last char in an string

      var result = str.substr(1,str.length-2)
      console.log(result)
      
   };
   

   //Tests 

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');