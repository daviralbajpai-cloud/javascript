const user = {

    username: "Aviral Bajpai",
    "name1" : "Aviral Bajpai",
    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India",
        
    }       
}
user.age = 21
user["is-online"]= true
// console.log(user["name1"]) // to access the "" we use only []

// user.username= "shivansh bajpai"

// console.log(user.username)

// Object.freeze(user) // to make the object immutable

// user.username = "shiv bajpai"
// console.log(user.username) // it will not change the username as it is frozen


// now implementing function in object
user.greet = function() {
    console.log("Hello, I am " + this.username) // this refers to the current object, which is user in this case
    console.log(`Hello, I am ${this.username}`) // using template literals
}

// user.greet() // Hello, I am Aviral Bajpai

// concatenating objects
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}

const obj3 = {...obj1, ...obj2} // using spread operator to concatenate objects

// console.log(obj3) // {a: 1, b: 2, c: 3, d: 4}   

const obj4 = Object.assign({},obj1, obj2) // using Object.assign to concatenate objects

// console.log(obj4) // {a: 1, b: 2, c: 3, d: 4}
const tinderuser = [
    {
        name: "Aviral Bajpai",
        age: 21,},
    {
        name: "Shivansh Bajpai",
        age: 22,
    },
    {
        name: "Shiv Bajpai",
        age: 23,
    }
]
tinderuser.name