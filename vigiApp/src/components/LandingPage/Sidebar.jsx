import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import {
  CloseIcon,
  UserOutlineIcon,
  DashboardIcon,
  TimerIcon,
  SettingsIcon,
} from "../index/icons";
import { Toggle } from "@/components/ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen overflow-hidden bg-[#0131A2] text-white p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
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
      <Profile />
    </div>
  );
};

const Navbar = () => {
  const buttonData = [
    {
      textValue: "Dashboard",
      iconValue: <DashboardIcon />,
      path: "/landing/dashboard",
    },
    {
      textValue: "Session",
      iconValue: <TimerIcon />,
      path: "/landing/session",
    },
    {
      textValue: "Drivers",
      iconValue: <UserOutlineIcon />,
      path: "/landing/drivers",
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

const Profile = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="/userDefault.png"
          alt="User Avatar"
        />
        <div className="flex flex-col">
          {!!user ? (
            <>
              <span className="text-lg font-semibold">
                {user.firstname} {user.lastname}
              </span>
              <span className="text-sm text-gray-300">@{user.username}</span>
            </>
          ) : (
            <span className="text-gray-500">User not logged in</span>
          )}
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Toggle aria-label="toggle">
              <SettingsIcon />
            </Toggle>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <button>Profile Settings</button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button onClick={logout}>Log Out</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;
