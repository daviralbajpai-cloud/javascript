// function api(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("weather data")
//         resolve(200)
//     },2000)

//     })
//     }
// async function GetWeatherData() {
//     await api()
// }

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
async function callback() {
    console.log("Starting data fetch...");
    
    let result1 = await asyncfunc();
    console.log(`Status 1: ${result1}`); // Output: Status 1: successfully
    
    let result2 = await asyncfunc2();
    console.log(`Status 2: ${result2}`); // Output: Status 2: successfully
}

// async function callback() {

//     await asyncfunc()

//     await asyncfunc2()

// }
callback()