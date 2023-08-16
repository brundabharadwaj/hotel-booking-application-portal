import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useAppDispatch } from "../../redux/hooks";
import { setSearchRooms } from "../../redux/search";

const navigations = [
  { title: "Home", linkTo: "/" },
  { title: "Pages", linkTo: "/" },
  { title: "Rooms", linkTo: "/" },
  { title: "Reservations", linkTo: "/" },
  { title: "Contact", linkTo: "/" },
];

const Home = () => {
  const dispatch = useAppDispatch();
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const roomsArray = [
    { title: "1", value: 1 },
    { title: "2", value: 2 },
    { title: "3", value: 3 },
  ]
  const adultsArray = [
    { title: "1", value: 1 },
    { title: "2", value: 2 },
    { title: "3", value: 3 },
  ]
  const childrenArray = [
    { title: "1", value: 1 },
    { title: "2", value: 2 },
    { title: "3", value: 3 },
  ]

  const [checkIn, setCheckIn] = useState(formattedDate);
  const [checkOut, setCheckOut] = useState(formattedDate);
  const [rooms, setRooms] = useState(roomsArray[0].value);
  const [adults, setAdults] = useState(adultsArray[0].value);
  const [children, setChildren] = useState(childrenArray[0].value);

  const searchRooms = () => {
    const data = {
      checkIn: checkIn || "",
      checkOut: checkOut || "",
      rooms: rooms || 0,
      adults: adults || 0,
      children: children || 0,
    };
    dispatch(setSearchRooms(data));

    console.log(data);
  };

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
        <div className="absolute inset-0 m-10 ml-20 mt-24 z-10 h-min">
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
                    <div key={item.title} className="relative inline-block">
                      <span className="font-Jost font-semibold text-lg hover:font-bold text-white mx-4 group relative cursor-pointer uppercase pb-2">
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white transform translate-x-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </span>
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
          <div className="font-Allison text-white text-9xl font-bold transform -skew-y-3">
            Book Your Vacation
          </div>
          <div className="mt-6 font-Jost text-white text-lg font-extralight">
            Explore new experience with Hotel!
          </div>
        </div>

        {/* Rooms Availability Search */}
        <div className="absolute inset-0 flex flex-col items-center justify-end mb-40">
          <div className="flex flex-row space-x-8">
            {/* Check In */}
            <Input
              handleChange={(e: any) => setCheckIn(e.target.value)}
              value={checkIn}
              labelText={"Check In"}
              labelFor={"Check In"}
              id={"checkIn"}
              name={"checkIn"}
              type={"date"}
              isRequired={false}
              placeholder={"Select Check In"}
              customClass={"w-40"}
            />
            {/* Check Out */}
            <Input
              handleChange={(e: any) => setCheckOut(e.target.value)}
              value={checkOut}
              labelText={"Check Out"}
              labelFor={"Check Out"}
              id={"checkOut"}
              name={"checkOut"}
              type={"date"}
              isRequired={false}
              placeholder={"Select Check Out"}
              customClass={"w-40"}
            />
            {/* Rooms */}
            <Input
              handleChange={(e: any) => setRooms(e.target.value)}
              value={rooms}
              labelText={"Rooms"}
              labelFor={"Rooms"}
              id={"rooms"}
              name={"rooms"}
              type={"dropdown"}
              dropdownData={roomsArray}
              isRequired={false}
              placeholder={"Select Number of Rooms"}
              customClass={"w-20 h-12"}
            />
            {/* Check In */}
            <Input
              handleChange={(e: any) => setAdults(e.target.value)}
              value={adults}
              labelText={"Adults"}
              labelFor={"Adults"}
              id={"Adults"}
              name={"Adults"}
              type={"dropdown"}
              dropdownData={adultsArray}
              isRequired={false}
              placeholder={"Select Number of Adults"}
              customClass={"w-20 h-12"}
            />
            {/* Check In */}
            <Input
              handleChange={(e: any) => setChildren(e.target.value)}
              value={children}
              labelText={"Children"}
              labelFor={"Children"}
              id={"Children"}
              name={"Children"}
              type={"dropdown"}
              dropdownData={childrenArray}
              isRequired={false}
              placeholder={"Select Number of Children"}
              customClass={"w-20 h-12"}
            />

            {/* Search Button */}
            <Button
              handleChange={searchRooms}
              labelText={"Search Room"}
              id={"searchRoom"}
              customClass={
                "mt-5 h-12 w-40 bg-transparent text-white font-Jost font-semibold text-3xl border-2 hover:bg-transparent hover:font-bold hover:underline"
              }
              disabled={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
