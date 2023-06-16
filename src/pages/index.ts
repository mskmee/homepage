import { lazy } from 'react';

export const Home = lazy(() => import('./home/Home'));
export const NotFound = lazy(() => import('./notFound/NotFound'));
export const About = lazy(() => import('./about/About'));
export const Portfolio = lazy(() => import('./portfolio/Portfolio'));
export const Contact = lazy(() => import('./contact/Contact'));
