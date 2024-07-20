import Link from "next/link"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
        <footer className="flex flex-wrap gap-3 justify-between items-center px-[20px] py-[30px] bg-bgSoft sm:px-[80px] dark:bg-bgSoftDark">
            <div className="text-textColor dark:text-textColorDark">Copyright © 2024 Essam Mohamed. All Rights Reserves</div>
            <div className="flex gap-3 items-center flex-wrap">
                <Link href={'https://www.linkedin.com/in/essam-abdel-maaboud-650658254/'} className="text-textColor text-[20px] hover:text-mainColor dark:text-textColorDark"><FaLinkedin/></Link>
                <Link href={'https://www.facebook.com/essam.abdelmaaboud'} className="text-textColor text-[20px] hover:text-mainColor dark:text-textColorDark"><FaFacebook /></Link>
                <Link href={'https://www.instagram.com/_3osal/'} className="text-textColor text-[20px] hover:text-mainColor dark:text-textColorDark"><FaInstagram /></Link>
                <Link href={'https://github.com/3osal'} className="text-textColor text-[20px] hover:text-mainColor dark:text-textColorDark"><FaGithub /></Link>
            </div>
        </footer>
  )
}

export default Footer