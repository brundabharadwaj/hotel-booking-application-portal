import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const PageNotFound = () => {
  const PageNotFoundPng = require("../../assets/NotFound.png");

  const [backgroundColor, setBackgroundColor] = useState(false);

  return (
    <div className="flex flex-col justify-center w-full pb-10">
      <div className="flex justify-center items-center w-11/12 h-3/5 px-4">
        <img
          className="mx-auto w-4/5"
          src={PageNotFoundPng}
          alt="404"
        />
      </div>
      <div className="align-middle text-center text-2xl items-center w-full">
        <h2>OHH! You're lost.</h2>
      </div>
      <div className="align-middle text-center text-lg items-center w-full">
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        </div>
        
        <div className="align-middle text-center items-center w-full mt-6">
        <Link
          onMouseEnter={() => setBackgroundColor(true)}
          onMouseLeave={() => setBackgroundColor(false)}
          to={ROUTES.HOME}
          className={`p-4 pl-10 pr-10 text-white font-sans text-xl text-center rounded-lg ${backgroundColor ? 'bg-red-700' : 'bg-blue-700' }`}
        >
          HOME
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
