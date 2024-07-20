import Image from "next/image";
import Link from "next/link";
import { FaDev } from "react-icons/fa";


const Hero = () => {
  return (
    <section className=" flex flex-col gap-4 md:flex-row items-center ">
      {/* left */}
      <div>
        <h1 className="text-textColor text-[60px] font-bold leading-[70px] dark:text-textColorDark "> <FaDev className="text-textSoft text-[20px]" /> Iam Essam a Front-End Software Developer</h1>
        <p className="text-textSoft text-[15px] dark:text-textSoftDark">
          My website programming expresses my deep passion, and it is evident in
          every <br /> programming step I take, to achieve the best possible experience
          for users.
        </p>
        <div className="flex gap-2 items-center">
            <Link className="bg-mainColor px-[15px] py-[10px] rounded-md text-textColorDark capitalize mt-4 hover:bg-altColor" href={'#Projects'}>projects</Link>
            <Link className=" px-[15px] py-[10px] rounded-md text-textColor capitalize mt-4 border border-mainColor dark:text-textColorDark" href={'https://github.com/3osal'}>gihub</Link>
        </div>
      </div>
      {/* right */}
      <div className="hidden lg:block shadow-2xl shadow-mainColor rounded-full">
        <Image src='/Hand coding-bro (1).png' alt="image" width={600} height={600} />
      </div>
    </section>
  );
};

export default Hero;
