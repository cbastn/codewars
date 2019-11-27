/*
Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takesa boolean value and return a 
"Yes" string for true, or a "No" string for false.


*/


function boolToWord( bool ){

//check the value of bool and return accordingly 
  if(bool == true){
      return 'Yes';
  }else{
      return 'No';
  }
}

console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')