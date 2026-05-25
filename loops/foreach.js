const array = ["a", "b", "c", "d", "e"]
// array.forEach( function (value){
//     console.log(value)
// })

// array.forEach( (value) => {
//     console.log(value)
// })

// function print(value){
//     console.log(value)
// }
// array.forEach(print)

const mycoding = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Doe",
        age: 25,
    },
    {
        name: "Smith",
        age: 35,
    }
]   
mycoding.forEach( (item) => {
    console.log(item.name, ":-", item.age)
})
