import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoutes";
import ScrollToTop from "../hooks/scrollToTop";
 
import ComingSoon from "../pages/comingSoon";
import PageNotFound from "../pages/pageNotFound";
import { Transaction } from "../pages/transaction";
 
const Navigator: React.FC = () => {
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
          <Route path="/transaction" element={<Transaction />} />
        </Route>       
      </Routes>
    </BrowserRouter>
  );
};
 
export default Navigator;