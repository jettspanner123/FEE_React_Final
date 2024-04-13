import React from "react";
import {FaGlobeAfrica} from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = (): React.JSX.Element => {
    const Options: { name: string, link: string }[] = [
        {name: "Home", link: "/"},
        {name: "Dashboard", link: "/dashboard"},
        {name: "Bookings", link: "/bookings"},
        {name: "Stories", link: "/stories"},
    ]

    return (
        <React.Fragment>
            <nav className={`text-white uppercase flex w-[70%] p-10 items-center justify-between`}>
                <h1 className={`font-bold flex justify-center items-center gap-[0.5rem] text-[1.75rem]`}>
                    <FaGlobeAfrica/>
                    <span>
                        Medica Plus
                        <div className={`w-full h-[5px] bg-white rounded-xl`}/>
                    </span>
                </h1>
                <ul className={`text-white text-[1.15rem] flex gap-[1rem]`}>
                    {Options.map((item: { name: string, link: string }, index: number) => {
                        return <motion.li
                            key={index}
                            onClick={() => window.location.assign(item.link)}
                            animate={{
                                y: 0,
                            }}
                            initial={{
                                y: -150
                            }}
                            transition={{
                                duration: 2,
                                delay: index * 0.1,
                                ease: [0.76, 0, 0.24, 1]
                            }}
                            className={` border-2 transition-colors duration-700 border-transparent hover:border-white text-white ${item.link === window.location.pathname ? `bg-white text-black` : ``} p-4 rounded-xl cursor-pointer `}
                        >{item.name}</motion.li>
                    })}
                </ul>
            </nav>
        </React.Fragment>
    )

}
export default Navbar;