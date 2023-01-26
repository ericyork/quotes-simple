const quoteArr = [{
    text: "Have no fear of perfection---you’ll never reach it.",
    author: "Salvador Dali"
  },{
    text:"Everything is designed. Few things are designed well.",
    author:"Brian Reed"
  },{
    text:"A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    author:"Antoine de Saint-Exupéry"
  },{
    text:"It's through mistakes that you actually can grow. You have to get bad in order to get good.",
    author:"Paula Scher"
  },{
    text:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author:"Paul Fowler"
  },{
    text:"Java is to JavaScript what car is to Carpet.",
    author:"Chris Heilmann"
  },{
    text:"Code is like humor. When you have to explain it, it’s bad.",
    author:"Cory House"
  },{
    text:"Optimism is an occupational hazard of programming: feedback is the treatment. ",
    author:"Ken Beck"
  },{
    text:"When to use iterative development? You should use iterative development only on projects that you want to succeed.",
    author:"Martin Fowler"
  },{
    text:"Programming isn't about what you know; it's about what you can figure out.",
    author:"Chris Pine"
  },{
    text:"The only way to learn a new programming language is by writing programs in it.",
    author:"Dennis Ritchie"
  },{
    text:"The most damaging phrase in the language is: it's always been done this way.",
    author:"Grace Hopper"
  },{
    text:"Your best and wisest refuge from all troubles is in your science.",
    author:"Ada Lovelace"
  },{
    text:"Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.",
    author:"George Bernard Shaw"
  },{
    text:"You can’t use up creativity. The more you use, the more you have.",
    author:"Maya Angelou"
  }
];
function generate() {
  let ranNum = Math.floor(Math.random() * quoteArr.length);
  console.log(quoteArr);
  let backClass = Math.floor(Math.random() * 10) + 1;
  let background = document.querySelector('main');
  document.querySelector("blockquote").innerText = quoteArr[ranNum].text;
  document.querySelector("cite").innerText = quoteArr[ranNum].author;
  if (backClass == 1) {
    background.setAttribute('class', '');
    background.classList.add('one');
  } else if (backClass == 2) {
    background.setAttribute('class', '');
    background.classList.add('two');
  } else if (backClass == 3) {
    background.setAttribute('class', '');
    background.classList.add('three');
  } else if (backClass == 4) {
    background.setAttribute('class', '');
    background.classList.add('four');
  } else if (backClass == 5) {
    background.setAttribute('class', '');
    background.classList.add('five');
  } else if (backClass == 6) {
    background.setAttribute('class', '');
    background.classList.add('six');
  } else if (backClass == 7) {
    background.setAttribute('class', '');
    background.classList.add('seven');
  } else if (backClass == 8) {
    background.setAttribute('class', '');
    background.classList.add('eight');
  } else if (backClass == 9) {
    background.setAttribute('class', '');
    background.classList.add('nine');
  } else {
    background.setAttribute('class', '');
    background.classList.add('ten');
  };
};

const button = document.querySelector('button');
const audio = document.getElementById('dice');
const shaker = document.getElementById('die');
button.addEventListener('click', e => {
  audio.play();
  shaker.classList.toggle('shake');
  shaker.classList.toggle('shakes');
  let dieFace = Math.floor(Math.random() * 6);
  if (dieFace == 0) {
    shaker.innerHTML = '&#9856;';
  } else if (dieFace == 1) {
    shaker.innerHTML = '&#9857;';
  } else if (dieFace == 2) {
    shaker.innerHTML = '&#9858;';
  } else if (dieFace == 3) {
    shaker.innerHTML = '&#9859;';
  } else if (dieFace == 4) {
    shaker.innerHTML = '&#9860;';
  } else {
    shaker.innerHTML = '&#9861;';
  }
});
