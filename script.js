let data = [];


// Show New Quotes
function newQuote(){
    const apiQuotes = data[Math.floor(Math.random() * data.length)];
    console.log(apiQuotes);
} 


// Get Quotes From API
const quote = "https://type.fit/api/quotes";

async function getQuotes(api){
    try{
        const response = await fetch(api);
         data = await response.json();

         newQuote();
    }catch{
        alert("Error fetching data")
    }
    
}

getQuotes(quote);