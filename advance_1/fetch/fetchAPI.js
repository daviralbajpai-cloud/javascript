const URL = "https://official-joke-api.appspot.com/random_joke";
let para = document.querySelector(".p");

const getFacts = async () => { 
    console.log("getting data...");
    
    // 1. Fetching from network
    let response = await fetch(URL);
    
    // 2. Converting stream to JS Object
    let data = await response.json();
    
    // 3. Injecting both setup and punchline into the HTML
    para.innerHTML = `${data.setup} <br><br> <em>${data.punchline}</em>`;
};

// 4. Fire the function!
getFacts(); 
