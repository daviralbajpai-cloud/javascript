// filter method returns value
//foreach method does not return value, it is used to perform some action on each element of the array, but it does not return a new array. It is used for side effects, such as logging or modifying external variables, rather than for creating a new array based on the original one.

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = mynum.filter((num) => num > 4)

// const newNum = mynum.filter((num) => {
// return num > 4})

console.log(newNum)

// same code with foreach loop

const foreachNum = []
mynum.forEach((num) => {
    if (num > 4) {
        foreachNum.push(num)
    }
})
console.log(foreachNum)