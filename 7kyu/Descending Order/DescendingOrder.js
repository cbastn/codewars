//Descending Order

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  //split number into array of individual nums, itterate through and compare each number to previous and sort in decending order,
  //join back the sorted array into string, and turn string into number
  return Number(n.toString().split('').sort((a,b) => {return b - a}).join(''))
}

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)