// asyncawait >> promises >> callback hell


// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "aviral", email:"daviralbajpai@gmail.com"})
//     },1000)                                                                                                                                                                
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


 // Promise have to built-in function : 1) then(resolve hone ke baad)  2)catch(reject hone ke baad)
 // yeh work tabhi karemge jab promise fulfilled hojaye

 function asyncfunc(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log( " data1")
            resolve("successfully")
        },4000);
    })
 }

 function asyncfunc2(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log( " data2")
            resolve("successfully")
        },4000)
    })
 }

// console.log("fetching data1...")
// let p1= asyncfunc()
// p1.then((res)=>{
//     console.log("fetching data2...")
//     let p2=asyncfunc2()
//     p2.then((res)=>{})
// })

//OR

console.log("fetching data1...")
asyncfunc().then((res)=>{
    console.log("fetching data2...")
    asyncfunc2().then((res)=>{})
})
