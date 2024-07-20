"use client"
import Link from "next/link"
import { NAVBAR_DATA } from "./NavBarData"
import { IoMenu } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";
import { useTheme } from "next-themes";


const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false)
  const handelNav = () => {
    setOpen(!open)
  }
  return (
    <nav className="h-[80px] flex items-center">
        <div className="container flex justify-between items-center">
          <div>
            <Link href={'/'} className="text-textColor text-[25px] font-bold dark:text-textColorDark">3osal</Link>
          </div>
          {/* links */}
          <div className="flex items-center gap-3 relative ">
          <button
            onClick={() => {
              theme == "dark" ? setTheme("ligth") : setTheme("dark");
            }}
          >
            {theme == "dark" ? <MdOutlineLightMode /> : <FaMoon />}
          </button>
            {NAVBAR_DATA.map((item) => (
              <div key={item.id} className="hidden md:block">
                <Link href={item.path} className="text-textSoft capitalize text-[15px] transition-all hover:text-textColor dark:text-textSoftDark dark:hover:text-textColorDark">{item.label}</Link>
              </div>
            ))}
            <span onClick={handelNav} className="text-textColor text-[25px] cursor-pointer md:hidden dark:text-textColorDark">
            {!open ? <IoMenu/> : <HiOutlineMenuAlt4 />}
            </span>
            <div className={!open ? 'hidden' : 'flex flex-col gap-3 bg-bgSoft absolute right-0 top-6 p-[20px] rounded-[7px] transition-all dark:bg-bgSoftDark'}>
            {NAVBAR_DATA.map((item) => (
              <div key={item.id}>
                <Link href={item.path} className="text-textSoft capitalize text-[15px] transition-all hover:text-textColor">{item.label}</Link>
              </div>
            ))}
            </div>
          </div>
        </div>
    </nav>
  )
}

export default NavBar