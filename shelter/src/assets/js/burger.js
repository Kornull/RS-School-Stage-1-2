const headerElements = document.querySelector('.header');
const btnBurger = document.querySelector('.burger')
const blocksHeader = headerElements.querySelectorAll('div')
const burgerIcon = headerElements.querySelector('span')
const nav = headerElements.querySelector('.nav')
const navLink = nav.querySelectorAll('.nav__link')
const logoBurger = headerElements.querySelector('.burger__logo')
let count = 0;


const remClass = () => {
  navLink.forEach(x => x.onclick = (el) => {
    document.body.classList.remove('active')
    nav.classList.remove('active')
    blocksHeader.forEach(x => x.classList.remove('active'));
    burgerIcon.classList.remove('active')
    logoBurger.classList.remove('active__logo')
  })
};


if (btnBurger) {
  btnBurger.onclick = () => {
    count += 1;
    console.log(count)
    document.body.classList.toggle('active')
    nav.classList.toggle('active')
    blocksHeader.forEach(x => x.classList.toggle('active'));
    burgerIcon.classList.toggle('active')
    logoBurger.classList.toggle('active__logo')
    if (count % 2 === 0) {
      remClass()
      count = 0;
    }
  };
}

window.addEventListener("orientationchange", function (ev) {
  document.body.classList.remove('active')
  nav.classList.remove('active')
  blocksHeader.forEach(x => x.classList.remove('active'));
  burgerIcon.classList.remove('active')
  logoBurger.classList.remove('active__logo')
});

let widthWindow;

setInterval(() => {
  widthWindow = window.innerWidth
  if (widthWindow > 767) {
    document.body.classList.remove('active')
    nav.classList.remove('active')
    blocksHeader.forEach(x => x.classList.remove('active'));
    burgerIcon.classList.remove('active')
    logoBurger.classList.remove('active__logo')
    count = 0;
  }

}, 30);

// const f = window.screen.width
// console.log(f)




