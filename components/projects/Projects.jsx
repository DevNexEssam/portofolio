import React from "react";
import MainTitle from "../main title/MainTitle";
import { PROJECTS_DATA } from "./projectsData";
import Image from "next/image";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import Link from "next/link";
import AllProjects from "./AllProjects";

const Projects = () => {
  return (
    <section id="Projects">
      <MainTitle label="projects" />
      <div>
        <h1 className="text-textColor text-[30px] font-bold capitalize w-max mx-auto dark:text-textColorDark ">
          latest project
        </h1>
        <div className="grid grid-cols-1 items-center mt-10 gap-7 md:grid-cols-2">
          {PROJECTS_DATA.map((item) => (
            <div key={item.id} className="border border-transparent transition-all rounded-[7px] p-[20px] hover:border-mainColor">
              <Image
                className="rounded-[10px]"
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
              />
              <span className="text-textColor font-bold capitalize text-[15px] w-max mt-3 block relative before:absolute before:top-3 before:right-[-80px] before:w-[50px] before:h-[2px] before:bg-mainColor dark:text-textColorDark">
                {item.title}
              </span>
              <div className="flex gap-3 mt-3">
                  <Link className="bg-mainColor text-textColor capitalize p-[5px] rounded-[7px] text-[12px] hover:bg-altColor dark:text-textColorDark" href={item.demo}>
                  preview
                  </Link>
                  <Link className="text-textColor border border-mainColor capitalize p-[5px] rounded-[7px] text-[12px] dark:text-textColorDark" href={item.code}>
                  code
                  </Link>
              </div>
            </div>
          ))}
        </div>
        <AllProjects />
      </div>
    </section>
  );
};

export default Projects;
