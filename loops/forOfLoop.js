const array = [1,2,3,4,5]
for(const index of array){
    console.log(index)      
}
console.log("\n ")

const string = "Hello World"
for(const index of string){
    console.log(index)
}

// map
const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
// console.log(map)

for(const [key, value] of map){
     console.log(key, ":-",value)
}
// yeh object pr nahi chalega