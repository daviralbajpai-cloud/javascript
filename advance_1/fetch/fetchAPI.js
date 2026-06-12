// API = application programming interface
const URL = "https://dog-api.kinduff.com/api/facts"
const getFacts = async()=>{ 
    console.log("getting data...")
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    console.log(data[0])

}