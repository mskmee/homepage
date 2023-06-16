import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Contact, Home, NotFound, Portfolio } from './pages';
import { Layout } from './components';
import { AppRouterPath } from './types/AppRouterPath';

const router = createBrowserRouter([
  {
    path: AppRouterPath.HOME,
    element: <Layout />,
    children: [
      {
        path: AppRouterPath.HOME,
        element: <Home />,
      },
      {
        path: AppRouterPath.ABOUT,
        element: <About />,
      },
      {
        path: AppRouterPath.PORTFOLIO,
        element: <Portfolio />,
      },
      {
        path: AppRouterPath.CONTACT,
        element: <Contact />,
      },
      {
        path: AppRouterPath.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
