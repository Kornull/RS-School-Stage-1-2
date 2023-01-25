// eslint-disable-next-line import/no-cycle
import { updateCars } from '../../../../View/pages/garage/car/createCars';
import { inputUpdateCarName } from '../../../../templates/input';
import { Urls, Winners } from '../../../../types/types';
import { returnWinners } from '../../rest-win/win-get';
import { setWinnerTable } from '../../../../View/pages/winners/winner';
import { METHOD } from '../../types/types';

export const getDelCard = async (id: number): Promise<void> => {
  await fetch(`${Urls.garage}/${id}`, {
    method: METHOD.DELETE,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const winarr: Winners[] = await returnWinners();
  winarr.forEach((car) => {
    if (car.id === id) {
      fetch(`${Urls.winners}/${id}`, {
        method: METHOD.DELETE,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setWinnerTable();
    }
  });

  updateCars();
};

export const deleteCar = (): void => {
  let id = 0;
  const carElements: NodeList = document.querySelectorAll('.car');

  carElements.forEach((el: Node) => {
    const newEl = el as HTMLElement;
    if (newEl.classList.contains('choice')) {
      id = Number(newEl.id);
    }
  });
  if (id !== 0) {
    getDelCard(id);
  }

  inputUpdateCarName().value = '';
};
