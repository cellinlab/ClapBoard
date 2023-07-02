import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Boardlist from "./pages/boardlist";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boardlist" element={<Boardlist />} />
      </Routes>
    </>
  );
};

export default App;
