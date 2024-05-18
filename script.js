const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");


let data = [];
// Show loading
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true
}

// Hide Loading 
function complete(){
    quoteContainer.hidden = false
    loader.hidden = true;
}
// Show New Quotes
function newQuote(){
    loading();
    const apiQuotes = data[Math.floor(Math.random() * data.length)];
    if(quote.author === null){
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = apiQuotes.author;
    }
    quoteText.textContent = apiQuotes.text;
    complete();
   
    
    
} 


// Get Quotes From API
const quote = "https://type.fit/api/quotes";

async function getQuotes(api){
    loading()
    try{
        const response = await fetch(api);
        data = await response.json();

        newQuote();
    }catch(error){
        alert("Error fetching data")
    }
    
}

function tweetQuote(){
    twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes(quote);

