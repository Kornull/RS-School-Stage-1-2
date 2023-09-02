import { Winners, Urls } from '../../../../types/types';
import { returnWinners } from '../win-get';

import { METHOD } from '../../types/types';

const getUpdateWin = async (objCar: Winners): Promise<void> => {
  await fetch(`${Urls.winners}`, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objCar),
  });
};

const getUpdateOldWin = async (win: Winners): Promise<void> => {
  await fetch(`${Urls.winners}/${win.id}`, {
    method: METHOD.PUT,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(win),
  });
};

export const setWinnerCar = async (win: Winners): Promise<void> => {
  const carList: Winners[] = await returnWinners();
  carList.forEach((carWin: Winners) => {
    if (carWin.id === win.id) {
      const newWin: Winners = {
        id: 0,
        time: 0,
        wins: 0,
      };
      let num: number = carWin.wins;
      if (carWin.time < win.time) {
        newWin.time = carWin.time;
      }
      newWin.id = win.id;
      newWin.wins = ++num;
      getUpdateOldWin(win);
    }
  });
  const filterId: Winners[] = carList.filter((car) => car.id === win.id);
  if (filterId.length === 0) getUpdateWin(win);
};
