const num = [1,2,3]
const sum = num.reduce(function(accumulator, currentValue){
    return accumulator + currentValue
} , 0)
// accumulator is the value that is returned by the previous iteration, and currentValue is the current element of the array that is being processed. The second argument (0 in this case) is the initial value of the accumulator. If you don't provide an initial value, the first element of the array will be used as the initial value, and the iteration will start from the second element.

console.log(sum)