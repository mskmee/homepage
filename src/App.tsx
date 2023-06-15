import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Contact, Home, NotFound, Portfolio } from './pages';
import { NavBar } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
