import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { isMobile as MobileBrowser } from 'react-device-detect';

import ProtectedRoutes from './protectedRoutes';
import PublicRoutes from './publicRoutes';
import ScrollToTop from '../hooks/scrollToTop';

import ComingSoon from '../pages/ComingSoon';
import PageNotFound from '../pages/PageNotFound';
import { Initial, Detail } from '../pages/auth';
import { Transaction } from '../pages/transaction';

const Navigator: React.FC = () => {
  /**
   * Check platform
   * Check using screen size (browser responsive)
   */
  const isMobile = useMediaQuery('(max-width:480px)') || MobileBrowser;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Routes which are accessible without authentication */}
        <Route element={<PublicRoutes />}>
          <Route path="/initial/:initialId" element={<Initial />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/" element={<ComingSoon isMobile={isMobile} />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* Routes which are accessible with authentication */}
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/transaction"
            element={<Transaction isMobile={isMobile} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
