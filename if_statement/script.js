const username = prompt('enter your name') || 'aviral'
const userage = prompt('enter you age')
if(userage>= 18 && userage<=24){
    console.log("inside if statement")
    console.log("username : ", username)
    console.log("userage : ", userage)

}
console.log("outside if statement")