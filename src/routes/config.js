import { Landing, Home } from 'views';

export const routes = [
  {
    name: 'landing',
    path: '/',
    exact: true,
    Element: Landing,
  },
  {
    name: 'home',
    path: '/home',
    exact: true,
    Element: Home,
  },
];
