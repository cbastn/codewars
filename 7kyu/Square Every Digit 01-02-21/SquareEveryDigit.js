//Square Every Digit

function squareDigits(num){
  //may the code be with you
  return(Number(num.toString().split('').map((n) => {return (Number(n) ** 2)}).join('')))
}

console.log(squareDigits(9119), 811181);
