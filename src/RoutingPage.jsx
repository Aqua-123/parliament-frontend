import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import OutletRoute from "./Components/OutletRoute";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import List from "./Components/List";
import Language from "./Components/LanguagePage";

function RoutingPage() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<OutletRoute />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="listpage" element={<List />} />
            <Route path="language" element={<Language />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default RoutingPage;
