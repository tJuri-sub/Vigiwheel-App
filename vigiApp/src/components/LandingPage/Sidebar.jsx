import React from "react";
import { NavLink } from "react-router-dom";
import {
  CloseIcon,
  UserOutlineIcon,
  DashboardIcon,
  TimerIcon,
} from "../index/icons";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen overflow-hidden bg-[#0131A2] text-white p-4 flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2">
          <img
            className="w-[40px] rounded-md"
            src="/logo.png"
            alt="vigiwheel logo"
          />
          <h3 className="text-xl">VigiWheel</h3>
        </button>
        <button>
          <CloseIcon />
        </button>
      </div>
      <Navbar />
    </div>
  );
};

const Navbar = () => {
  const buttonData = [
    {
      textValue: "Dashboard",
      iconValue: <DashboardIcon />,
      path: "/dashboard",
    },
    {
      textValue: "Session",
      iconValue: <TimerIcon />,
      path: "/session",
    },
    {
      textValue: "Drivers",
      iconValue: <UserOutlineIcon />,
      path: "/drivers",
    },
  ];

  return (
    <div>
      {buttonData.map((button, index) => (
        <NavLink
          to={button.path}
          key={index}
          className={({ isActive }) =>
            `border-b-2 flex items-center w-full my-3 py-2 px-1 hover:bg-[#0465B8] transition hover:duration-100 ${
              isActive ? "bg-[#0465B8]" : ""
            }`
          }
        >
          <span className="mr-2">{button.iconValue}</span> {button.textValue}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
