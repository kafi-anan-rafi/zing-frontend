import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import SearchBox from "./SearchBox";
import { AiOutlineShop } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import auth from "../../services/authService";
import Footer from "../Footer/Footer";

export default function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.getUserInfo());
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between">
      <nav className="bg-slate-950">
        <div className="container mx-auto flex justify-between items-center py-3 text-white">
          {/* Logo */}
          <NavLink
            to="/"
            className={`flex items-center justify-center transition-colors text-orange-500 `}
          >
            {/* <RiShoppingBag2Fill size={22} className="mr-1" /> */}
            <span className="text-3xl font-bold">zing</span>
          </NavLink>

          {/* Search Box */}
          <SearchBox />

          {/* Navigation Links */}
          <div className="md:flex justify-between hidden">
            {user ? (
              ""
            ) : (
              <NavLink
                to="/seller/signin"
                className="flex items-center md:px-2 px-1 rounded-sm hover:text-orange-500 transition-colors"
              >
                <AiOutlineShop size={24} className="mr-2" />
                <p className="hidden lg:block">Become a Seller</p>
              </NavLink>
            )}

            {user ? (
              <NavLink
                to="/signout"
                className="flex items-center md:px-2 px-1 rounded-sm hover:text-orange-500 transition-colors"
              >
                <p>Sign out</p>
              </NavLink>
            ) : (
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `flex items-center md:px-2 px-1 rounded-sm hover:text-orange-500 transition-colors ${
                    isActive ? "text-orange-500" : "text-white"
                  }`
                }
              >
                <GoPerson size={24} className="mr-2" />
                <p className="hidden lg:block">Sign in</p>
              </NavLink>
            )}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center md:px-2 px-1 rounded-sm hover:text-orange-500 transition-colors ${
                  isActive ? "text-orange-500" : "text-white"
                }`
              }
            >
              <BsCart3 size={22} className="mr-2" />
              <p className="hidden lg:block">Cart</p>
            </NavLink>
            {user ? (
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                `flex items-center md:px-2 px-1 rounded-sm hover:text-orange-500 transition-colors ${
                  isActive ? "text-orange-500" : "text-white"
                }`
              }
              >
                <p className="hidden lg:block"> {user.name} </p>
                <GoPerson size={24} className="ml-2" />
              </NavLink>
            ) : (
              ""
            )}
          </div>
          <div className="block md:hidden cursor-pointer">
            <GiHamburgerMenu size={28} />
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}
