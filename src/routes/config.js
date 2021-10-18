import { Landing, Home } from 'views';

export const routes = [
  {
    name: 'landing',
    path: '/',
    exact: true,
    component: Landing,
  },
  {
    name: 'home',
    path: '/home',
    exact: true,
    component: Home,
  },
];
