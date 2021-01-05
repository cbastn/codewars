// Sum of Numbers
//Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

//Note: a and b are not ordered!

function getSum( a,b )
{
   //Good luck!
   let lower;
   let higher;
   let result = lower;
   if(a === b){
       return a 
   }else{
    a < b ? (lower = a, higher = b) : (lower = b, higher = a)
    for(lower; lower < higher; lower++){
        result = lower + (lower + 1);
    }
    return(result)
  }
}

  console.log(getSum(0,-1),-1);
  console.log(getSum(0,1),1);