//Isograms

/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case. */

function isIsogram(str){
  //...
 let letters = str.split('');
 
 for(let i = 0; i < letters.length; i++){
     let count = 0; 
     for(let j = 0; j < letters.length; j++){
         if(letters[j].toLowerCase() === letters[i].toLowerCase()){
             count = count + 1;
             if(count === 2){
                 return false
             }
         }
     }
 }
 return true
}

console.log( isIsogram("Dermatoglyphics"), true );
console.log( isIsogram("isogram"), true );
console.log( isIsogram("aba"), false, "same chars may not be adjacent" );
console.log( isIsogram("moOse"), false, "same chars may not be same case" );
console.log( isIsogram("isIsogram"), false );
console.log( isIsogram(""), true, "an empty string is a valid isogram" );
