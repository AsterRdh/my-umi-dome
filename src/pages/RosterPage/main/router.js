
import list from '../list';
import card from '../card';
const routes = [
  {
    path: '/',
    component: list,
    exact: true
  },
  {
    path: '/list',
    component: list
  },
  {
    path: '/card',
    component: card
  }
];

export default routes;
