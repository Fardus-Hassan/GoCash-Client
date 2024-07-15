import { useState } from "react";
import logo from "./assets/currency-symbol.png"
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { TbCoinTakaFilled } from "react-icons/tb";

function Nav() {

    const [show, setShow] = useState(false);

    return (
        <>
            <aside className="flex flex-col w-64 h-screen px-4 py-5 overflow-y-auto bg-secColor border-r">
                <div className="flex justify-start items-center">
                    <div className="">
                        <img className="w-20" src={logo} alt="Logo" />
                    </div>
                    <h1 className="text-3xl font-poppins font-bold text-white">Go Cash</h1>
                </div>

                <div className="flex justify-center gap-3 items-center text-white font-montserrat font-bold text-xl border-2 py-2 rounded-2xl mt-10">
                <TbCoinTakaFilled className="text-2xl"/>
                <span>10030 taka</span>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-10 font-montserrat font-bold">
                    <nav className="space-y-6">
                        <div className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                            <FaUser />
                            <span className="mx-4">Overview</span>
                        </div>
                        <div className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                            <FaClipboardList />
                            <span className="mx-4">Transactions</span>
                        </div>
                        <div onClick={() => setShow(!show)} className={`flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg ${show ? "bg-pmColor" : ""}`}>
                            <FaUser />
                            <span className="mx-4">Service</span>
                        </div>
                        <div className={`${show ? "block duration-300" : "hidden duration-300"} space-y-6 ml-6`}>
                            <hr />
                            <div className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                            <IoIosSend className="text-xl"/>
                                <span className="mx-4">Send Money</span>
                            </div>
                            <div className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                            <IoCashOutline className="text-xl"/>
                                <span className="mx-4">Cash Out</span>
                            </div>
                            <div className="flex items-center px-4 py-2 text-white hover:bg-pmColor duration-300 rounded-lg" href="#">
                            <BsCashCoin className="text-xl"/>
                                <span className="mx-4">Cash In</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default Nav
