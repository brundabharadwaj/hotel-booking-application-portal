import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import { getSessionStorageItem } from "./constants/sessions";
import { TOKENS } from "./constants/textConstant";
import { AuthRoute } from "./core/AuthRoutes";
import Login from "./screens/Auth/Login";
import Registration from "./screens/Auth/Registration";
import { useAppDispatch } from "./redux/hooks";
import { setUserDataFromSessions } from "./redux/auth";
import PageNotFound from "./screens/404/PageNotFound";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let user = getSessionStorageItem(TOKENS.sessionStorageToken);
    dispatch(setUserDataFromSessions(user));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Login />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Registration />} />

        <Route
          path={ROUTES.DASHBOARD}
          element={
            <AuthRoute>
              <> </>
            </AuthRoute>
          }
        />

        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
