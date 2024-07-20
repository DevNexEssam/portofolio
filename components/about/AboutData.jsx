import { FaCalendar, FaCss3, FaEnvelope, FaGlobe, FaHtml5, FaJs, FaLinkedin, FaPhoneAlt, FaReact, FaSass } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";



export const ABOUT_DATA1 = [
    {
        id : 0,
        label : 'Date of birth:',
        desc : '22/2/2006',
        icon : <FaCalendar />
    },
    {
        id : 1,
        label : 'Nationality: ',
        desc : 'egypt',
        icon : <FaGlobe />
    },
    {
        id : 2,
        label : 'Address:',
        desc : 'Alex, Egypt',
        icon : <FaLocationDot  />
    }
]


export const ABOUT_DATA2 = [
    {
        id : 0,
        label : 'phone:',
        desc : '+20 1068446885',
        icon : <FaPhoneAlt />
    },
    {
        id : 1,
        label : 'email: ',
        desc : 'essammohamedabdelmaaboud22',
        icon : <FaEnvelope />
    },
    {
        id : 2,
        label : 'linkedin: ',
        desc : 'Essam Abdel Maaboud',
        icon : <FaLinkedin />
    }
]

export const ABOUT_ICON = [
    {
        id : 0,
        icon : <FaHtml5 />,
    },
    {
        id : 1,
        icon : <FaCss3 />,
    },
    {
        id : 2,
        icon : <FaJs />,
    },
    {
        id : 3,
        icon : <FaSass />,
    },
    {
        id : 4,
        icon : <RiTailwindCssFill />,
    },
    {
        id : 5,
        icon : <FaReact />,
    },
    {
        id : 6,
        icon : <RiNextjsFill />,
    },
]