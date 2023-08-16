import React from "react";

const navigations = [
  { title: "Home", linkTo: "/" },
  { title: "Pages", linkTo: "/" },
  { title: "Rooms", linkTo: "/" },
  { title: "Reservations", linkTo: "/" },
  { title: "Contact", linkTo: "/" },
];

const Home = () => {
  return (
    <div>
      {/* Image */}
      <div className="flex items-center justify-center h-screen">
        <img
          className="w-full h-full object-cover -z-20"
          src={require("../../assets/background.png")}
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent -z-10 to-black opacity-90"></div>

        {/* Header 1 - Contact & Login */}
        <div className="absolute inset-0">
          <div className="flex flex-row justify-between m-10 mt-6 ml-20">
            {/* Contact */}
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFFFFF"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="ml-4 font-Jost font-semibold text-white">
                +91 98765 43210
              </span>

              {/* Mail */}
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#FFFFFF"
                  className="w-6 h-6 ml-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="ml-4 font-Jost font-semibold text-white">
                  Book@Hotel.com
                </span>
              </div>
            </div>

            {/* Login / Signup */}
            <div className="flex flex-row">
              <span className="ml-4 font-Jost font-bold text-white">Login</span>
              <span className="ml-4 font-Jost font-bold text-white">|</span>
              <span className="ml-4 font-Jost font-bold text-white">
                Sign Up
              </span>
            </div>
          </div>
        </div>

        {/* Header 2 - Logo & Menus */}
        <div className="absolute inset-0 m-10 ml-20 mt-24">
          <div className="flex flex-row justify-between w-full">
            <img
              className="w-52"
              src={require("../../assets/logo.png")}
              alt="Hotel"
            />
            <div className="flex flex-row h-8 justify-between align-middle text-center">
              <div className="mt-4">
                {navigations.map((item) => {
                  return (
                    <div className="relative inline-block">
                      <span className="font-Jost font-semibold text-lg hover:font-bold text-white mx-4 group relative cursor-pointer uppercase pb-2">
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white transform translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border-2 text-white font-semibold border-white p-3 uppercase cursor-pointer">
              Book Now
            </div>
          </div>
        </div>

        {/* Book your vacation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center -z-10">
          <div className="font-Allison text-white text-9xl font-bold transform -skew-y-3">Book Your Vacation</div>
          <div className="mt-6 font-Jost text-white text-lg font-extralight">Explore new experience with Hotel!</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
