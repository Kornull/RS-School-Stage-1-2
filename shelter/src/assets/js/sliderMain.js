import cardsObj from '../../main/pets.json';
import './popup.js'
import { popurRun } from './popup.js';
const BTN_LEFT = document.querySelector(".btn__left");
const BTN_RIGHT = document.querySelector(".btn__right");
const CAROUSEL = document.querySelector("#slider__carousel");
const ITEM_ACTIVE = document.querySelector('#item-active');
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const namesPets = ['sophia', 'timmy', 'scarlet', 'freddie', 'charly', 'woody', 'jennifer', 'katrine']
let arrCards = [];
let arr = [];
let num = 0;
let count = 0;
ITEM_ACTIVE.querySelectorAll('div').forEach(x => { if (x['id'] !== '') arr.push(x['id']) })
const newCard = () => {
  if (count === 3) {
    count = 0;
    arr = arrCards.slice();
    arrCards = [];
  }
  const card = document.createElement('div')
  while (arrCards.length < 3) {
    num = Math.floor(Math.random() * 8)
    if (!arr.includes(namesPets[num]) && !arrCards.includes(namesPets[num])) {
      arrCards.push(namesPets[num])
    }
  }

  for (let j of cardsObj) {
    const card_img = document.createElement("div");
    const img = document.createElement("img");
    const card_text = document.createElement("div");
    const btn = document.createElement('button');
    const title = document.createElement('h3');
    if (count < 3) {
      card.classList.add('slider__block');
      if (arrCards[count] === j['name'].toLowerCase()) {
        card.classList.add("slider__block");
        btn.classList.add('btn', 'btn__white');
        btn.innerText = 'Learn more';
        card_text.classList.add('slider__title');
        title.classList.add('our__pets--slider');
        img.src = j.img;
        card_img.classList.add('slider__img');
        title.innerText = j.name;
        card_text.appendChild(title);
        card_img.appendChild(img)
        card.appendChild(card_img);
        card.appendChild(card_text);
        card.appendChild(btn);
        card.id = `${j.name.toLowerCase()}`

        count++
        return card;

      }
    }
  }
}

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_RIGHT.removeEventListener("click", moveRight);
  BTN_LEFT.removeEventListener("click", moveLeft);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);


BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (ev) => {
  let itemChange;
  if (ev["animationName"] === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    itemChange = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  }
  else {
    CAROUSEL.classList.remove("transition-right");
    itemChange = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
  itemChange.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    const card = newCard();
    itemChange.appendChild(card)
    popurRun()
  }
});

