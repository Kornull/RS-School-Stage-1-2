import { CarsAttribute, Key, Urls } from '../../../../types/types';

const str = (queryS: Key[] = []): string => {
  if (queryS.length) {
    return `?${queryS.map((x: Key) => `${x.key}=${x.value}`).join('&')}`;
  }
  return '';
};

export const getCountCarsPage = async (queryString: string): Promise<CarsAttribute[] | []> => {
  const response: Response = await fetch(`${Urls.garage}${queryString}`);
  if (response.ok) {
    return response.json();
  }
  return [];
};

export const getPage = async (num: number): Promise<CarsAttribute[]> => {
  const page: Key = {
    key: '_page',
    value: num,
  };
  const limit: Key = {
    key: '_limit',
    value: 7,
  };
  const queryStr: string = str([page, limit]);
  return getCountCarsPage(queryStr);
};

export const getCountAllCars = async (): Promise<CarsAttribute[]> => {
  const response: Response = await fetch(`${Urls.garage}`);
  const countPage: HTMLElement | null = document.querySelector('#page-count-cars span');
  const data: CarsAttribute[] = await response.json();
  if (countPage !== null) {
    countPage.innerText = `${data.length || 0}`;
  }

  return data;
};
