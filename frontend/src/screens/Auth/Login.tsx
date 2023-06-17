import React, { useState } from "react";
import AuthHeader from "./components/AuthHeader";
import { ROUTES } from "./../../constants/routes";
import FormButton from "../../components/Button/FormButton";
import Input from "../../components/Input";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks";
import { authState, signin } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import { SUCCESS } from "../../constants/textConstant";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState({});
  const [error, setError] = useState("");

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AuthHeader
          heading="Login to your account"
          description="Don't have an account yet? "
          linkName="Signup"
          linkUrl={ROUTES.SIGNUP}
        />

        <div className="py-3 ">
          <form
            className="mt-8 space-y-6"
            onSubmit={(event) => {}}
          >
            <div className="-space-y-px">
              
            </div>
          </form>
        </div>

        {error && (
          <div
            className={`flex flex-row py-3 text-center text-red-800 bg-white`}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
