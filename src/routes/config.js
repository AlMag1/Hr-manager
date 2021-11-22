import { Landing, Home } from 'views';

export const routes = [
  {
    name: 'landing',
    path: '/',
    Element: Landing,
    requireAuth: false,
  },
  {
    name: 'home',
    path: '/home',
    Element: Home,
    requireAuth: true,
  },
];
