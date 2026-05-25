const Myobject = {
    "name": "John",
    "age": "Doe",
    "name": "Smith",
}
for(const key in Myobject){
    console.log(key, ":-", Myobject[key])
}
// same keys are not allowed in objects, last key will be considered.
// array and string ke liye for in loop use nahi karna chahiye, kyuki wo index return karta hai, value nahi.