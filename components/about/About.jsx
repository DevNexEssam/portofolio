"use client";
import MainTitle from "../main title/MainTitle";
import Image from "next/image";
import { FaCss3, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { ABOUT_DATA1, ABOUT_DATA2, ABOUT_ICON } from "./AboutData";

const About = () => {
  return (
    <section id="about">
      <MainTitle label="about" />
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* left */}
        <div className=" hidden w-[400px] mx-auto p-[20px] md:block lg:w-[500px]">
          <Image
            src="/Questions-rafiki.png"
            alt="image me"
            width={500}
            height={500}
          />
        </div>
        {/* right */}
        <div>
          <h1 className="capitalize text-textColor text-[25px] font-bold relative before:absolute before:bottom-[-10px] before:left-0 before:w-[50px] before:h-[5px] before:bg-mainColor dark:text-textColorDark">
            all about me
          </h1>
          <p className="text-textSoft mt-5 dark:text-textSoftDark">
            My Name Is Essam Mohamed Abdel-Maaboud And I Am A Deticated Front
            End Develeper Based In Alexandria-Egypt.
          </p>
          <h1 className="capitalize text-textColor text-[25px] font-bold mt-5 mb-3 dark:text-textColorDark">
            skills
          </h1>
          <div className="flex flex-wrap gap-3">
            {ABOUT_ICON.map((item) => (
              <span
                key={item.id}
                className="text-textColor bg-bgSoft p-[10px] text-[30px] rounded-[5px] cursor-pointer hover:bg-zinc-800 hover:text-mainColor dark:text-textColorDark dark:bg-bgSoftDark"
              >
                {item.icon}
              </span>
            ))}
          </div>
          {/* table */}
          <div className="flex flex-wrap  mt-7 sm:gap-10">
            <div>
              {ABOUT_DATA1.map((item) => (
                <div
                  key={item.id}
                  className="text-textSoft flex items-center gap-[5px] hover:text-mainColor cursor-pointer dark:text-textSoftDark"
                >
                  <span className="block mb-2 sm:text-[15px] text-textColor dark:text-textColorDark">{item.icon}</span>
                  <span className="block mb-2 sm:text-[15px]">{item.label}</span>
                  <span className="block mb-2 sm:text-[15px]">{item.desc}</span>
                </div>
              ))}
            </div>
            <div>
              {ABOUT_DATA2.map((item) => (
                <div
                  key={item.id}
                  className="text-textSoft flex gap-[5px] items-center hover:text-mainColor cursor-pointer dark:text-textSoftDark"
                >
                  <span className="block mb-2 sm:text-[15px] text-textColor dark:text-textColorDark">
                    {item.icon}
                  </span>
                  <span className="block mb-2 sm:text-[15px]">{item.label}</span>
                  <span className="block mb-2 text-[12px] sm:text-[15px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
