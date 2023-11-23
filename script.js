const currentWord = document.getElementById('current-word');
const totalWord = document.getElementById('total-word');
const wordProgress = document.getElementById('words-progress');
const shuffleWords = document.getElementById('shuffle-words');
const examProgress = document.getElementById('exam-progress');
const slider = document.querySelector('.slider');
const flipCard = document.querySelector('.flip-card');
const cardFront = document.getElementById('card-front');
const frontTitle = document.querySelector('.front-title');
const cardBack = document.getElementById('card-back');
const foreignWord = cardFront.querySelector('h1');
const translateWord = cardBack.querySelector('h1')
const backTitle = document.querySelector('.back-title');
const example = document.querySelector('span');
const backBtn = document.getElementById('back');
const nextBtn = document.getElementById('next');
const testingBtn = document.getElementById('exam');
const studyCards = document.querySelector('.study-cards');
const examCards = document.querySelector('.exam-card');


function random(max) {
    let rand = Math.random() * (max + 1);
    Math.floor(rand)
};

class Items {
    constructor(title, translation, example) {
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

slider.addEventListener('click', function() {
    flipCard.classList.toggle('active');
});

let currentIndex = 0;

function createCard(content) {
    currentWord.textContent = currentIndex + 1;
    foreignWord.textContent = content.title;
    translateWord.textContent = content.translation;
    example.textContent = content.example;
    wordProgress.value = (currentIndex + 1) / arr.length * 100;
}

createCard(arr[currentIndex]);

nextBtn.addEventListener('click', function() {
    currentIndex++;
    createCard(arr[currentIndex]);
    backBtn.removeAttribute('disabled');
    if (currentIndex == arr.length - 1) {
        nextBtn.disabled = true;
    }
})

backBtn.addEventListener('click', function() {
    currentIndex--;
    createCard(arr[currentIndex]);
    nextBtn.removeAttribute('disabled');
    if (currentIndex == 0) {
        backBtn.disabled = true
    }
})

shuffleWords.addEventListener('click', function() {
    arr.sort(() => Math.random());
    createCard(arr[currentIndex])
})

totalWord.textContent = arr.length;

let selectedCard;

function createTestCard(object) {
    const divElement = document.createElement('div');
    divElement.classList.add('card');
    const elementP = document.createElement('p');
    elementP.textContent = object;
    divElement.append(pElement);
    divElement.addEventListener('click', () => checkTranslation(divElement));
    return divElement;
}

function cardInsert() {
    const fragment = new DocumentFragment();
    const newArray = [];
    arr.forEach((array) => {
        newArray.push(createTestCard(array.translation));
        newArray.push(createTestCard(array.title))
    });

    fragment.append(...newArray.sort(() => Math.random()))
    examCards.innerHTML = '';
    examCards.append(fragment);
}

testingBtn.addEventListener('click', function() {
    studyCards.classList.add('hidden');
    cardInsert()
})

function checkTranslation(currentCard) {
    if (!selectedCard) {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(card => {
            card.classList.remove('correct');
            card.classList.remove('wrong');
        })
        currentCard.style.pointerEvents = 'none';
        currentCard.classList.add('correct');
        selectedCard = currentCard;
    } else {
        const wordObject = arr.find(word => word.translation === selectedCard.textContent || word.title === selectedCard.textContent);
        if (wordObject.translation === currentCard.textContent || wordObject.title === currentCard.textContent) {
            currentCard.style.pointerEvents = 'none';
            currentCard.classList.add('correct');
            currentCard.classList.add('fade-out');
            selectedCard.classList.add('fade-out');
            let allCardsFaded = true;
            allCards.forEach(card => {
                if (!card.classList.contains('fade-out')) {
                    allCardsFaded = false;
                }
            });
            if (allCardsFaded) {
                setTimeout(() => {
                    alert('Ты справилась!');
                }, 500);
            }
        } else {
            currentCard.classList.add('wrong');
            currentCard.style.pointerEvents = 'all';
            selectedCard.style.pointerEvents = 'all';
        }
    }
}

/* я не могу понять, где у меня ошибка, так как у меня пример слова находится там, где должен быть номер карточки   */