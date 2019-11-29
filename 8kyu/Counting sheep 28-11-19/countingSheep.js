/*
Counting sheep...

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;

  for(let i = 0; i < arrayOfSheep.length; i++){
   if(arrayOfSheep[i] == true){
       count++
   }   
  }
  return count;
}

//Tests

var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")