import { motion as m } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import {
  RiSearchLine,
  RiAccountCircleLine,
  RiShoppingCartLine,
  RiMenu2Line,
  RiCloseCircleLine,
} from "react-icons/ri";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="border-b border-gray-100">
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4">
          <button className="p-3 text-gray-700 md:hidden" onClick={toggleNav}>
            {isNavOpen ? (
              <RiCloseCircleLine className="h-5 w-5" />
            ) : (
              <RiMenu2Line className="h-5 w-5" />
            )}
          </button>

          <NavLink to="/" className="flex">
            <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Reactive Commerce
            </span>
          </NavLink>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
            <NavLink
              to="/products"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-violet-400"
            >
              Products
            </NavLink>
            <NavLink
              to="/deals"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-violet-400"
            >
              Deals
            </NavLink>
            <NavLink
              to="/contact"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-violet-400"
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center border-x border-gray-100">
              <span className="border-e border-e-gray-100">
                <NavLink
                  to="/cart"
                  className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-violet-400"
                >
                  <RiShoppingCartLine className="h-4 w-4 text-gray-700" />
                  <span className="sr-only">Cart</span>
                </NavLink>
              </span>

              <span className="border-e border-e-gray-100">
                <NavLink
                  to="/account"
                  className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-violet-400"
                >
                  <RiAccountCircleLine className="h-4 w-4 text-gray-700" />
                  <span className="sr-only"> Account </span>
                </NavLink>
              </span>

              <span className="hidden sm:block">
                <NavLink
                  to="/search"
                  className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-violet-400"
                >
                  <RiSearchLine className="h-4 w-4 text-gray-700" />
                  <span className="sr-only"> Search </span>
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </m.div>

      <div
        className={clsx(
          "absolute mx-[5vw] my-[5vh] h-[80vh] w-[90vw] rounded-lg bg-gray-300 px-[22.5vw] py-10 text-center text-violet-500 font-bold text-2xl",
          isNavOpen ? "" : "hidden"
        )}
      >
        <div className="flex flex-col">
          <ul className="space-y-10">
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/deals">Deals</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
