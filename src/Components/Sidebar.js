"use client";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { TbSmartHome } from "react-icons/tb";
import { RxVideo } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { TbUserSquareRounded } from "react-icons/tb";
import { CiLaptop } from "react-icons/ci";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-end lg:hidden">
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          {isActive ? (
            <HiMiniBars3 className="h-5 w-5" />
          ) : (
            <MdClose className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        className={`z-20 fixed flex flex-col justify-between overflow-x-hidden bg-[#fff] w-[280px] space-y-6  py-4  inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  lg:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="flex flex-col justify-between flex-1 mt-6">
            <div>
              <MenuItem icon={TbSmartHome} label="Dashboard" address="/" />

              <MenuItem
                icon={HiOutlineNewspaper}
                label="Content"
                address="/content"
              />
              <MenuItem icon={LuUsers} label="Team" address="/team" />
              <MenuItem
                icon={TbUserSquareRounded}
                label="User"
                address="/users"
              />
              <MenuItem icon={CiLaptop} label="App/Web" address="/app-web" />
              <MenuItem
                icon={MdOutlineAnalytics}
                label="Analytics"
                address="/analytics"
                num={3}
              />
              <MenuItem
                icon={RxVideo}
                label="Media"
                address="/media"
                num={13}
              />
              <MenuItem
                icon={IoNotificationsOutline}
                label="Notification"
                address="/notification"
              />
              <MenuItem
                icon={IoSettingsOutline}
                label="Settings"
                address="/settings"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
