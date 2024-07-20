import Link from "next/link";
import React from "react";

const AllProjects = () => {
  return (
    <section className="bg-mainColor px-[20px] py-[20px] mt-5 rounded-[10px] md:px-[50px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-[20px] text-textColorDark font-bold capitalize dark:text-textColorDark md:text-[35px]">
            Take a look at my projects
          </h1>
          <p className="text-[10px] text-gray-200 dark:text-gray-200 md:text-[15px]">
            My mission is to achieve development and success in all my projects,
            in order to serve <br />
            society and achieve leadership in every field in which I work.
          </p>
        </div>
        <div className="text-textSoft font-bold capitalize bg-white w-full text-center rounded-[5px] cursor-pointer py-[15px] px-[30px] md:py-[10px] md:px-[20px] md:w-max dark:text-textSoft">
          <Link href="https://github.com/3osal">here me</Link>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
