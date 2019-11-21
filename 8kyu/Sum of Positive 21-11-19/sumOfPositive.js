/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    //create varaible for total
   let sum = 0;
//loop through array 
  for(let i = 0;i < arr.length;i++){
      //check if the number is positive
      if(arr[i]>0){
          //add the positive number to the total
          sum += arr[i];
      }
  }
  return sum;
}

//Tests

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);