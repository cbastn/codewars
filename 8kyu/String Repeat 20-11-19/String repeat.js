/*
https://www.codewars.com/kata/string-repeat/train/javascript

Write a function called repeatString which repeats the given String src exactly count times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

*/

function repeatStr (n, s) {
    let result = ''; // store the resulting string after each addition 

    for(let i = 0;i<n;i++){ 
        //add the string to the result on each pass until its equal to the number provided 
        result = result + s;
    }
    return result;
  }


  console.log(repeatStr(3, "*"), "***");
  console.log(repeatStr(5, "#"), "#####");
 console.log(repeatStr(2, "ha "), "ha ha ");