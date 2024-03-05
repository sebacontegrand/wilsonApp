import React from "react";
import Image from "next/image";
import { IoMdTennisball } from "react-icons/io";

import { IoAirplane, IoBrowsers, IoFootball } from "react-icons/io5";
import MenuItem from "../item/menuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsers size={40} />,
    title: "dashboard",
    subTitle: "Ver",
  },
  {
    path: "/dashboard/counter",
    icon: <IoAirplane size={40} />,
    title: "Counter",
    subTitle: "client side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "static generation",
  },
];
const NavBar: React.FC = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex text-lg md:text-2xl font-bold  text-red-600">
          <IoMdTennisball className="mr-1" />
          <span>Wilson</span>
          <span className="text-blue-500">Tennis</span>.
        </h1>
        <p className="text-slate-500 text-sm">focus on the ball lines</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Sebastian Conte-Grand
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <MenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
