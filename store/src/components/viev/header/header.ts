import Container from '../container/container';
import Basket from '../basket/basket';

class Header {
  basket: Basket;
  container: Container;

  constructor() {
    this.container = new Container();
    this.basket = new Basket();
  }

  create(): HTMLElement {
    const cont = this.container.createContainer();
    const head = <HTMLElement>document.createElement('header');
    const logo = <HTMLDivElement>document.createElement('div');
    const title = <HTMLHeadingElement>document.createElement('h1');
    title.className = 'header__title';
    title.innerText = 'Laptop-Store';
    logo.className = 'header__logo';
    logo.append(title);
    head.className = 'header';
    cont.appendChild(logo);
    cont.appendChild(this.basket.create());
    head.appendChild(cont);
    // cont.createContainer().appendChild();
    // this.countIncrement();
    // this.basketEndCount();
    return head;
  }
}

export default Header;
