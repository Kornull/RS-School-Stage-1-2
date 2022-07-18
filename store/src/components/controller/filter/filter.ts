import BtnsBrand from '../../viev/filter-blocks/filter-brand';
import BtnsColor from '../../viev/filter-blocks/filter-color';
import InputName from '../../viev/filter-blocks/filter-input-name';
import BtnsRam from '../../viev/filter-blocks/filter-ram';
import FilterYear from '../../viev/filter-blocks/filter-year';
import FilterStock from '../../viev/filter-blocks/filter-quantity-stock';
import SortList from '../../viev/filter-blocks/list-sorted';
import CheckboxSort from '../../viev/filter-blocks/filter-checkbox';
import ResetBtn from '../../viev/filter-blocks/reset-btn';

class Filters {
  btnB: BtnsBrand;
  btnC: BtnsColor;
  btnR: BtnsRam;
  input: InputName;
  filterYears: FilterYear;
  filterStock: FilterStock;
  sortList: SortList;
  sortCheckbox: CheckboxSort;
  resetBtn: ResetBtn;

  constructor() {
    this.btnB = new BtnsBrand();
    this.btnC = new BtnsColor();
    this.btnR = new BtnsRam();
    this.input = new InputName();
    this.filterYears = new FilterYear();
    this.filterStock = new FilterStock();
    this.sortList = new SortList();
    this.sortCheckbox = new CheckboxSort();
    this.resetBtn = new ResetBtn();
  }
  runSearch() {
    const search: HTMLDivElement = document.createElement('div');
    search.className = 'filter__input';

    search.append(this.input.filterName());
    search.append(this.filterYears.filterName());
    search.append(this.filterStock.filterName());
    search.append(this.sortList.filterName());
    search.append(this.sortCheckbox.filterName());
    return search;
  }
  runBtn() {
    const btn: HTMLDivElement = document.createElement('div');
    btn.className = 'filter__btn';
    btn.appendChild(this.btnB.filterBrand());
    btn.appendChild(this.btnC.filterColor());
    btn.appendChild(this.btnR.filterRam());
    btn.appendChild(this.resetBtn.btnResBrand());

    return btn;
  }
}
export default Filters;