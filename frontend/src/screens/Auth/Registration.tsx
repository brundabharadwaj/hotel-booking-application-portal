import React, { useState } from "react";
import AuthHeader from "./components/AuthHeader";
import { ROUTES } from "./../../constants/routes";
import Input from "../../components/Input";
import FormButton from "../../components/Button/FormButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { authState, register } from "../../redux/auth";
import { useNavigate } from "react-router-dom";
import { USER_CREATED_SUCCESS } from "../../constants/textConstant";

const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [registrationState, setRegistrationState] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setRegistrationState({ ...registrationState, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <AuthHeader
          heading="Sign up for an Account"
          description="Already a user? "
          linkName="Signin"
          linkUrl={ROUTES.LOGIN}
        />
        <div className="py-3 ">
          <form className="mt-8 space-y-6" onSubmit={() => {}}>
            <div className="-space-y-px">

            </div>
          </form>
        </div>
        {error && <div className={`flex flex-row py-3 text-center text-red-800 bg-white capitalize`}>
          {error}
        </div>}
      </div>
    </div>
  );
};

export default Registration;
