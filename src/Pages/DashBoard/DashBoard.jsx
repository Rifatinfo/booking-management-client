import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div className="flex flex-col md:flex-row gap-2 max-w-7xl mx-auto md:p-0 p-2">
            {/* routing content */}
            <div className="w-full  md:w-64 md:min-h-screen bg-[#C73450]">
                <div className="">
                    <div className="text-white font-semibold text-center py-2 mb-4">
                        <p className="md:text-2xl">HOTEL BOOKING SYSTEM</p>
                    </div>
                    <div className="w-40 mx-auto h-0.5 bg-white border-1 border-white"></div>
                </div>
                <ul className="p-4">
                    {isAdmin ? <><li className="mb-2"><NavLink to="/dashboard/cart">
                        <div className="flex gap-2 text-xl  items-center ml-[58px] md:ml-0 justify-start text-white font-semibold">
                            <p><FaCartShopping /></p>
                            <p>My Card</p>
                        </div>
                    </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>Admin Home</p>
                            </div>
                        </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/all-user">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>All User</p>
                            </div>
                        </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>Add Item</p>
                            </div>
                        </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>My Booking</p>
                            </div>
                        </NavLink></li></> : <>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><FaCartShopping /></p>
                                <p>My Card</p>
                            </div>
                        </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>User Home</p>
                            </div>
                        </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>Reservation</p>
                            </div>
                        </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>Add Item</p>
                            </div>
                        </NavLink></li>
                        <li className="mb-2"><NavLink to="/dashboard/cart">
                            <div className="flex gap-2 text-xl  items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                                <p><IoHome /></p>
                                <p>My Booking</p>
                            </div>
                        </NavLink></li>
                    </>}

                    {/* divider */}
                    <div className="w-40 mx-auto h-0.5 bg-white border-1 border-white mt-4 mb-4"></div>
                    <li><NavLink to="/">
                        <div className="flex gap-2 text-xl   items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                            <p><IoHome /></p>
                            <p>Home</p>
                        </div>
                    </NavLink></li>
                    <li><NavLink to="/">
                        <div className="flex gap-2 text-xl   items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                            <p><IoMdMenu /></p>
                            <p>menu</p>
                        </div>
                    </NavLink></li>
                    <li><NavLink to="/">
                        <div className="flex gap-2 text-xl   items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                            <p><FaBagShopping /></p>
                            <p>Shop</p>
                        </div>
                    </NavLink></li>
                    <li><NavLink to="/">
                        <div className="flex gap-2 text-xl   items-start ml-[58px] md:ml-0 justify-start text-white font-semibold">
                            <p><MdContactPhone /></p>
                            <p>Contact</p>
                        </div>
                    </NavLink></li>
                </ul>
            </div>
            <div className="w-full md:flex-1 ">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;