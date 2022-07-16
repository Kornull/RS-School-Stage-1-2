import { keys } from 'ts-transformer-keys';
import employee from '../../laptop.json';
import { Laptop } from '../types';
import Products from './products/product';
import { LocalStor } from './storage/storage';

class SortedCard {
  product: Products;
  sortArr: Laptop[];
  copySortLeng: Laptop[];
  storage: LocalStor;
  constructor() {
    this.storage = new LocalStor();

    this.product = new Products();
    this.sortArr = [];
    this.copySortLeng = [];
  }
  newSortArr(data: string[], count: number): void {
    this.storage.set('SortAll', data);
    this.storage.set('BrandCount', [count]);
    this.sortArr = [];
    const keysOfLaptop = keys<Laptop>();
    employee.forEach((lapEl) => {
      let counts = 0;
      data.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            counts++;
            if (counts === count) {
              this.sortArr.push(lapEl);
            }
          }
        });
      });
    });
    this.copySortLeng = [];
    this.sortArr.forEach((lapEl) => {
      let counts = 0;
      data.forEach((el1) => {
        keysOfLaptop.forEach((key: keyof Laptop) => {
          if (lapEl[key] === el1) {
            counts++;
            if (counts === count) {
              this.copySortLeng.push(lapEl);
            }
          }
        });
      });
    });
    if (data.length === 0) {
      this.product.createCard(employee);
    } else {
      this.product.createCard(this.copySortLeng);
    }
  }
  emptyArr() {
    this.product.createCard([]);
  }
}

export default SortedCard;