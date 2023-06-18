import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { About, Contact, Home, NotFound, Portfolio } from './pages';
import { Layout } from './components';
import { AppRouterPath } from './types/AppRouterPath';

export function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path={AppRouterPath.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={AppRouterPath.ABOUT} element={<About />} />
          <Route path={AppRouterPath.PORTFOLIO} element={<Portfolio />} />
          <Route path={AppRouterPath.CONTACT} element={<Contact />} />
          <Route path={AppRouterPath.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
