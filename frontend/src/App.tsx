import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";

import Home from "./screens/Home";
import Login from "./screens/Auth/Login";
import Registration from "./screens/Auth/Registration";
import PageNotFound from "./screens/404/PageNotFound";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Registration />} />

        <Route
          path={ROUTES.DASHBOARD}
          element={
           <>
            Dashboard
           </>
          }
        />
        
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
