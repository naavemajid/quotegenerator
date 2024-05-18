const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");


let data = [];

// Show New Quotes
function newQuote(){
    const apiQuotes = data[Math.floor(Math.random() * data.length)];
    if(quote.author === null){
        authorText.textContent = "Unknown";
    }else{
        authorText.textContent = apiQuotes.author;
    }
    // Check Quote Length to determine styling
    // if (quote.text.length > 50){
    //     quoteText.classList.add('long-quote');
    // } else {
    //     quoteText.classList.remove('long-quote');
    // }
    quoteText.textContent = apiQuotes.text;
   
    
    
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

function tweetQuote(){
    twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes(quote);