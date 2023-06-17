import React, { useState, useEffect } from "react";
import { verifyUserToken } from "../services/verifyUserToken";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const AuthRoute = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    verifyUserToken()
      .then((resp) => {
        if (resp){
          setIsAuthenticated(resp);
        }
      })
      .catch((err) => setIsAuthenticated(false));
  }, []);

  if (!isAuthenticated) {
    return <div className="container text-center mt-10 text-lg">
      Session expired! Please <Link className="underline text-blue-700 cursor-pointer" to={ROUTES.LOGIN}>click here</Link> to login again.
    </div>;
  }

  return children;
};

export const IsLoggedIn = async () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    verifyUserToken()
      .then((resp) => setIsAuthenticated(resp))
      .catch(() => setIsAuthenticated(false));
  }, []);
  console.log(isAuthenticated);

  return isAuthenticated;
};
