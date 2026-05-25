const user ={
    username: "John",
    price: 100,
    
    welcomeMessage: function() {
        console.log(`Welcome, ${this.username}! Your price is ${this.price}.`);
        console.log(this);
    }
    
};

// user.welcomeMessage();              

// user.username = "Aviral"
// user.welcomeMessage();

// const simpleFunction = function() {
//     let username = "Aviral";
//     console.log(this.username);
// }

// simpleFunction();

// const arrowFunction = () => {
//     let username = "Aviral";
//     console.log(this.username);
// }

// arrowFunction();


const addtwoNUmbers =(a,b) => { // if we use curly braces we need to use return statement
    return a+b
}
console.log(addtwoNUmbers(5,10));


const addtwo =(a,b) =>  a+b
console.log(addtwo(5,10));

const addtwo =(a,b) =>  (a+b)
console.log(addtwo(5,10));