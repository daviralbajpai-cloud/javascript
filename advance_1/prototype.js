const employee ={
    calcTax(){
        console.log("tax is 10%")
    }
}

const aviral ={
    salary : 1000
}
const aviral2 ={
    salary : 1000
}
const aviral3 ={
    salary : 1000
}
const aviral4 ={
    salary : 1000
}
aviral.__proto__= employee
aviral2.__proto__= employee
aviral3.__proto__= employee
aviral4.__proto__= employee