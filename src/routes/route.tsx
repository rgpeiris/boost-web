import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { isMobile as MobileBrowser } from "react-device-detect";

import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoutes";
import ScrollToTop from "../hooks/scrollToTop";
 
import ComingSoon from "../pages/comingSoon";
import PageNotFound from "../pages/pageNotFound";
import { Transaction } from "../pages/transaction";
 
const Navigator: React.FC = () => {
  /**
   * Check platform
   * check using screen size (browser responsive), display mode (PWA installed method) or using user agent of browser
   */
  const isSmallScreen = useMediaQuery("(max-width:480px)");
  const isStandalone = useMediaQuery("(display-mode: standalone)");
  const isMobile = isSmallScreen || isStandalone || MobileBrowser;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Routes which are accessible without authentication */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<ComingSoon />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* Routes which are accessible with authentication */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/transaction" element={<Transaction isMobile={isMobile} />} />
        </Route>       
      </Routes>
    </BrowserRouter>
  );
};
 
export default Navigator;