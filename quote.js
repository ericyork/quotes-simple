// Store quotes in an array with text and author keys
const quotesArray = [{
    text: "Have no fear of perfection---you’ll never reach it.",
    author: "Salvador Dali"
  },{
    text:"Everything is designed. Few things are designed well.",
    author:"Brian Reed"
  }]

// Use random number generation to select among quotes
let ranNum = Math.floor(Math.random() * quoteArr.length);

// Use array keys to assign values to DOM elements
let domQuote = document.querySelector("blockquote");
domQuote.innerText = quoteArr[ranNum].text;

// Use arrow functions to assign event listeners
const button = document.querySelector('button');
button.addEventListener('click', e => {
  audio.play();
})
