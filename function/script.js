function sayMyName(){
    console.log("A")
    console.log("V")
    console.log("I")
    console.log("R")
    console.log("A")
    console.log("L")    
    }

// sayMyName // this is calling the function but not executing it, it will return the function definition

// sayMyName() // this is executing the function, it will print the name Aviral Bajpai 

function add(a, b){
    console.log(a + b)
}

//add(2, 3) // this will print 5

function add2(a, b){
    return a + b
}

//const result = add2(4, 5) // this will return 9 and store it in result variable
// console.log(result) // this will print 9

function add3(a, b){
    return a + b
    console.log("This will not be executed") // this will not be executed as it is after return statement
}

//const result2 = add3(6, 7) // this will return 13 and store it in result2 variable
// console.log(result2) // this will print 13

function loginUserMessage(username){
    if(username === undefined){
        return "Please enter a username"
    }
    return `Hello ${username}, welcome back!`
}  
// console.log(loginUserMessage()) // Please enter a username
// console.log(loginUserMessage("Aviral")) // Hello Aviral, welcome back!


function cartVALUE(...numbers){
    return numbers
}
console.log(cartVALUE(1, 2, 3, 4, 5)) // this will return [1, 2, 3, 4, 5] as it is using rest operator to collect all the arguments in an array 