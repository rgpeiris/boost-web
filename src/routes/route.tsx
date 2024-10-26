import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Transaction } from "../pages/transaction";
 
import ComingSoon from "../pages/ComingSoon";
import PageNotFound from "../pages/PageNotFound";
 
const Navigator: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
};
 
export default Navigator;