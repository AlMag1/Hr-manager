import { Landing, Home } from 'views';

export const routes = [
  {
    name: 'landing',
    path: '/',
    Element: Landing,
  },
  {
    name: 'home',
    path: '/home',
    Element: Home,
  },
];
