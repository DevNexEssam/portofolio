import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import React from 'react'
import MainTitle from "../main title/MainTitle";

const Contact = () => {
  return (
    <section id="Contact">
        <MainTitle label='contact' />
            <div className="data mt-16 grid grid-rows-1 lg:grid-cols-2 gap-10 items-start">
                <div className="left flex flex-col gap-5">
                    <div className="card flex gap-3 items-center bg-bgSoft w-[100%] md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-altColor dark:bg-bgSoftDark dark:hover:bg-altColor">
                        <FaEnvelope className="text-[30px] text-textColor dark:text-textColorDark" />
                        <span className="block text-textColor text-[12px] sm:text-[15px] dark:text-textColorDark ">essammohamedabdelmaaboud22</span>
                    </div>
                    <div className="card flex gap-3 items-center bg-bgSoft w-[100%] md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-altColor dark:bg-bgSoftDark dark:hover:bg-altColor">
                        <FaPhoneAlt className="text-[30px] text-textColor dark:text-textColorDark" /> 
                        <span className="block text-textColor text-[12px] sm:text-[15px] dark:text-textColorDark">+20 101868446885</span>
                    </div>
                    <div className="card flex gap-3 items-center bg-bgSoft w-[100%] md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-altColor dark:bg-bgSoftDark dark:hover:bg-altColor">
                        <FaLocationDot className="text-[30px] text-textColor dark:text-textColorDark" />
                        <span className="block text-textColor text-[12px] sm:text-[15px] dark:text-textColorDark">AlAlexandria, Egypt</span>
                    </div>
                </div>
                <div className="right">
                    <form action="/" className="bg-bgSoft p-[20px] rounded-[10px] flex flex-col gap-5 dark:bg-bgSoftDark">
                        <div>
                            <input type="text" placeholder="Name" className="bg-neutral-50 text-mainColor border-none outline-0 rounded-[10px] p-4 w-[100%] dark:bg-neutral-950"  />
                        </div>
                        <div className="flex gap-4">
                        <input type="email" placeholder="Email" className="bg-neutral-50 text-mainColor border-none outline-0 rounded-[10px] p-4 w-[100%] dark:bg-neutral-950"  />
                            <input type="text" placeholder="Phone" className="bg-neutral-50 text-mainColor border-none outline-0 rounded-[10px] p-4 w-[100%] dark:bg-neutral-950"  />
                        </div>
                        <div>
                            <textarea name="des" placeholder="Message" className="w-[100%] bg-neutral-50 text-mainColor p-3 outline-0 rounded-[10px] dark:bg-neutral-950"></textarea>
                        </div>
                        <button className="text-textColor bg-mainColor text-center capitalize px-[30px] py-[10px] w-[max-content] rounded-[15px] hover:bg-altColor dark:text-textColorDark">send</button>
                    </form>
                </div>
            </div>
    </section>
  )
}

export default Contact