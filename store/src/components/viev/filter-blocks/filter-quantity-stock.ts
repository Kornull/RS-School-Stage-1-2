import * as noUiSlider from 'nouislider';
import FilterBlocksDiv from './filters-blocks';
import SortedCard from '../../controller/sorted';
import { LocalStor } from '../../controller/storage/storage';
class FilterStock extends FilterBlocksDiv {
  value1: HTMLDivElement;
  value2: HTMLDivElement;
  filterStock: noUiSlider.target;
  local: LocalStor;
  sortedCards: SortedCard;
  // search: Search;
  constructor() {
    super();
    this.value1 = document.createElement('div');
    this.value2 = document.createElement('div');
    this.filterStock = document.createElement('div');
    this.local = new LocalStor();
    this.sortedCards = new SortedCard();
  }
  filterName() {
    this.filter = document.createElement('div');
    this.filter.className = 'slider__stock slider';
    this.filterBtn = document.createElement('div');
    this.filterStock.className = 'slider-stock';
    this.filterStock.id = 'slider-round';
    this.value1.className = 'slider__stock--value1';
    this.value2.className = 'slider__stock--value2';

    noUiSlider.create(this.filterStock, {
      start: this.local.get('UiSliderCallbackStock'),
      connect: true,
      range: {
        min: 1,
        '15%': 2,
        '30%': 3,
        '40%': 4,
        '45%': 5,
        '50%': 6,
        '55%': 7,
        '60%': 8,
        '65%': 9,
        '70%': 10,
        '75%': 11,
        '80%': 12,
        '85%': 13,
        '90%': 14,
        '95%': 15,
        max: 16.5,
      },
    });
    let stockArr: number[] = [];
    const skipValues: HTMLElement[] = [this.value1, this.value2];
    this.filterStock.noUiSlider?.on('update', (values, handle: number, callback) => {
      stockArr = [];
      skipValues[handle].innerHTML = Math.floor(+values[handle]).toString();
      console.log(noUiSlider.default);
      this.local?.set('UiSliderCallbackStock', callback);
      console.log(values[0]);
      for (let i = Math.floor(+values[0]); i <= Math.floor(+values[1]); i++) {
        stockArr.push(i);
      }
      stockArr = Array.from(new Set(stockArr));
      if (this.local !== undefined) {
        this.local.set('StockBrands', stockArr);
        let countSort: number[] | string[] = [...this.local.get('CountSortedGet')];
        if (stockArr.length === 0) {
          countSort = countSort.filter((e) => e !== '6');
        } else {
          // countSort = countSort.filter((e) => e !== '1');
          countSort.push('6');
        }
        countSort = Array.from(new Set(countSort));
        console.log(countSort);
        this.local?.set('CountSortedGet', countSort);
      }
    });

    this.filter.appendChild(this.value1);
    this.filter.appendChild(this.value2);
    this.filter.appendChild(this.filterStock);
    this.filterBtn.appendChild(this.fragment);
    return this.filter;
  }
}

export default FilterStock;