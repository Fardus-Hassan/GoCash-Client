import { useState } from "react";
import logo from "../assets/currency-symbol.png"
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { TbCoinTakaFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Nav() {

    const [show, setShow] = useState(false);
    const [showNav, setShowNav] = useState(false);

    return (
        <div className={`fixed  duration-300 ${showNav ? "md:translate-x-0 translate-x-0" : "md:translate-x-0 translate-x-[-256px]"}`}>
            <nav className="flex flex-col w-64 h-screen px-4 py-5 overflow-y-auto bg-secColor">
                <div className="flex justify-start items-center">
                    <div className="">
                        <img className="w-20" src={logo} alt="Logo" />
                    </div>
                    <h1 className="text-3xl font-poppins font-bold text-white">Go Cash</h1>
                </div>

                <div className="flex justify-center gap-3 items-center text-white font-montserrat font-bold text-xl bg-pmColor py-2 rounded-xl mt-7">
                    <TbCoinTakaFilled className="text-2xl" />
                    <span>40 taka</span>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-10 font-montserrat font-bold">
                    <nav className="space-y-6">
                        <NavLink to='/' onClick={() => { setShowNav(false); setShow(false) }} className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                            <FaUser />
                            <span className="mx-4">Overview</span>
                        </NavLink>
                        <NavLink to='/trans' onClick={() => { setShowNav(false); setShow(false) }} className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                            <FaClipboardList />
                            <span className="mx-4">Transactions</span>
                        </NavLink>
                        <div onClick={() => setShow(!show)} className={`flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg ${show ? "bg-pmColor" : ""}`}>
                            <MdOutlineMiscellaneousServices className="text-2xl"/>
                            <span className="mx-4">Services</span>
                        </div>
                        <div className={`${show ? "block duration-300" : "hidden duration-300"} space-y-6 ml-6`}>
                            <hr />
                            <NavLink to='/send-money' onClick={() => setShowNav(false)} className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                                <IoIosSend className="text-xl" />
                                <span className="mx-4">Send Money</span>
                            </NavLink>
                            <NavLink to='/cash-out' onClick={() => setShowNav(false)} className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                                <IoCashOutline className="text-xl" />
                                <span className="mx-4">Cash Out</span>
                            </NavLink>
                            <NavLink to='/cash-in' onClick={() => setShowNav(false)} className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                                <BsCashCoin className="text-xl" />
                                <span className="mx-4">Cash In</span>
                            </NavLink>
                        </div>
                    </nav>
                </div>
                <div onClick={() => setShowNav(!showNav)} className="md:hidden bg-secColor w-[50px] h-[50px] rounded-r-xl flex flex-col justify-center items-center absolute top-0 left-0 translate-x-[256px]">

                    {showNav ? <RxCross2 className="text-3xl text-white" /> : <FaBars className="text-2xl text-white" />}
                </div>
            </nav>
        </div>
    )
}

export default Nav
