import React, { useState } from "react";
import DropDownMenu from "./DropdownMenu";

const Header = ({count}) => {

  // state variables for opening burger icon in small and medium screens.

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header>
      <nav className="mt-4">

      {/* Main Div Container */}

        <div className="lg:flex justify-between w-5/6 lg:max-w-7xl mx-auto ">

        {/* Div contains Title */}

          <div className="flex justify-between ">
          <div className="p-2">
            <span className="font-poppins text-slate-900 font-normal text-2xl whitespace-nowrap ">
              {" "}
              E-Cart
            </span>
            </div>

            {/* Div contain Button and its functionality */}

            <div className="lg:hidden ">
              <button onClick={handleClick} className="px-2 py-1 mb-1 border-2 rounded-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Div contains Menu and Cart details */}

          <div className={`lg:flex justify-between w-full lg:max-w-6xl mx-auto ${open?'block':'hidden'}`}>
            <div className="lg:block justify-start">
              <ul className="lg:flex lg:space-x-6 space-y-0 ">
                <li className="font-poppins p-3 text-slate-500 ">
                  <button>Home</button>
                </li>
                <li className="font-poppins p-3 text-slate-500">
                  <button>About</button>
                </li>
                <li className="font-poppins p-2 text-slate-500">
                  <DropDownMenu />
                </li>
              </ul>
            </div>

            {/* Cart design and functionality, update the add/remove operations are done */}
            
            <div className="lg:block justify-start ">
              <button className="lg:flex space-x-2 border-black border-2 px-3 py-2 rounded-md m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                <span>Cart</span>
                <span className="bg-black text-white rounded-full px-2">{count}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
