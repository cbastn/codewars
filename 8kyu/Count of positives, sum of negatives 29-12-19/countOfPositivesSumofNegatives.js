// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
 
    let arr = [];
    if(input != null && input.length > 0){
           let count = 0; 
           let sum = 0;
        for(let i = 0; i < input.length; i++){
            
            if(input[i] > 0){
                count++;
              
            }else{
                sum += input[i];
            }
        }
        console.log(arr = [count,sum]);
    }
    
    return arr;
}

//Tests


    var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    var actual = countPositivesSumNegatives(testData);
    var expected = [10, -65];

    console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
    
    testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    actual = countPositivesSumNegatives(testData);
    expected = [8, -50];
    
    Test.expect(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

