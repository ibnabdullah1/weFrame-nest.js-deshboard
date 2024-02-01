"use client";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import userProfile from "../../public/image/image9.png";
import { usePathname } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const path = usePathname();
  const isActive = path == "/stories";
  return (
    <div className="px-5 py-3 flex items-center justify-between">
      {isActive ? (
        <div className="flex items-center gap-5">
          <Link href={"/content"}>
            <FaArrowLeftLong />
          </Link>
          <h4 className="font-semibold text-lg">Stories</h4>
        </div>
      ) : (
        <div className="items-center hidden max-w-xs py-2 px-4  rounded bg-[#FCFCFD]  lg:flex">
          <IoIosSearch className="text-2xl text-[#CECECE]" />
          <input
            type="text"
            className="w-full bg-[#FCFCFD] py-1 pl-3 border-0 focus:border-0 focus:ring-0 focus:outline-none active:border-0"
            placeholder="Search..."
          />
        </div>
      )}
      <div className="flex gap-4 items-center">
        {!isActive && (
          <div className="border flex justify-between px-4 w-[280px] py-3 rounded-lg">
            <div className="flex gap-1 items-center">
              <h2>11-10-2022</h2>
              <IoCalendar className="text-[#3D43CF]" />
            </div>
            or
            <div className="flex gap-1 items-center">
              <h2>11-10-2022</h2>
              <IoCalendar className="text-[#3D43CF]" />
            </div>
          </div>
        )}
        <div className=" flex items-center border gap-9 px-2 rounded-lg py-2">
          <div className=" flex items-center gap-2">
            <Image
              width={30}
              height={30}
              className="object-cover h-full rounded-lg"
              src={userProfile}
              alt=""
            />
            <div>
              <h4 className="text-xs">Welcome back</h4>
              <h2 className="text-sm font-semibold">Akshita Patel</h2>
            </div>
          </div>
          <SlArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
