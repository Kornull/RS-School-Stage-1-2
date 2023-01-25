import './_app.scss';
import { btnPage } from '../Controller/buttons/btn';
import { garageLink } from '../View/pages/garage/garage';
import { getWinnerTable } from '../View/pages/winners/winner';

export async function App() {
  const root = <HTMLElement>document.querySelector('#root');
  const form: HTMLElement = await garageLink();
  const win = await getWinnerTable();
  root.appendChild(form);
  root.appendChild(win);
  root.appendChild(btnPage());

  return root;
}
