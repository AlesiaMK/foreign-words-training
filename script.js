const currentWord = document.getElementById('current-word');
const totalWord = document.getElementById('total-word');
const wordProgress = document.getElementById('words-progress');
const shuffleWords = document.getElementById('shuffle-words');
const examProgress = document.getElementById('exam-progress');
const slider = document.querySelector('.slider');
const flipCard = document.querySelector('.flip-card');
const cardFront = document.getElementById('card-front');
const frontTitle = document.querySelector ('.front-title');
const cardBack = document.getElementById('card-back');
const backTitle = document.querySelector('.back-title');
const example = document.querySelector('span');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const testing = document.getElementById('exam');


function random(max) {
    let rand = Math.random()*(max+1);
    Math.floor(rand)
};

class Items{
    constructor(title, translation, example){
        this.title = title;
        this.translation = translation;
        this.example = example
    }
}

const items1 = new Items('banana', 'банан', 'Bananas are a healthy source of fiber, potassium, vitamin B6, vitamin C, and various antioxidants and phytonutrients.') 
const items2 = new Items('book', 'книга', ' I think this book is worth reading.');
const items3 = new Items('cat', 'кот', '  I can hear a cat scratching at the window. ');
const items4 = new Items('juice', 'сок', ' Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables.');
const items5 = new Items('shop', 'магазин', ' I took the car to the shop to get new brakes.'); 

const arr = [items1, items2, items3, items4, items5];

slider.addEventListener('click', function(){
    if(flipCard.classList.contains('active')){
        flipCard.classList.remove('active')
    }else{
        flipCard.classList.add('active')
    }
});