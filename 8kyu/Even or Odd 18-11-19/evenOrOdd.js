/*
Create a function (or write a script in Shell)
that takes an integer as an argument and returns
 "Even" for even numbers or "Odd" for odd numbers.
 */


function even_or_odd(number) {

//The definition of an even number is on that has no remainder
//when devided by 2 
    if(number % 2 == 0){ 
        return 'Even';
    }else{
        return 'Odd';
    }
  }

  //Tests

console.log(even_or_odd(2), "Even");
console.log(even_or_odd(0), "Even");
console.log(even_or_odd(7), "Odd");
console.log(even_or_odd(1), "Odd");