const form= document.querySelector('form')
// queryselector wr aur ht ka upar isliye nhi likheng kyuki jab page start hoga tbki value milege ko ki empty hogi

form.addEventListener('submit',function(e){
    e.preventDefault() 

const ht = parseInt(document.querySelector('#height').value) // parseint se string value ko int mein kar dega aur value se value milegi
const wt = parseInt(document.querySelector('#weight').value) // parseint se string value ko int mein kar dega aur value se value milegi
const results = document.querySelector('#results') // parseint se string value ko int mein kar dega aur value se value milegi
if(ht ===''|| ht<0 || isNaN(ht)){
results.innerHTML='please give valid ht';}
else if(wt ===''|| wt<0 || isNaN(wt)){
results.innerHTML='please give valid wt';

}
else{
    const bmi = (wt/((ht*ht)/10000)).toFixed(2)

    results.innerHTML= `<span>${bmi}</span>`
}
})