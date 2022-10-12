import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from './../modal/modal';

function DropdownTopBar() {

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center mt-2 mr-1">
      <div>
        <div className="dropdown relative">
          <button
            className="
          dropdown-toggle
          px-3
          py-2
          bg-blue-500
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-sm
          hover:bg-blue-600 hover:shadow-sm
          focus:bg-blue-600 focus:shadow-sm focus:outline-none focus:ring-0
          active:bg-blue-700 active:shadow-sm active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
            type="button"
            id="dropdownMenuButton1d"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>

          </button>
          <ul
            className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
            aria-labelledby="dropdownMenuButton1d"
          >
            <li>
              <button
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                onClick={() => { navigate('/settings') }}
              >Settings</button
              >
            </li>
            <li>
              <button
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                onClick={() => { navigate('/security') }}
              >Security</button>
            </li>

            <li>
              <button
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                onClick={() => { navigate('/transactions') }}
              >Transações</button>
            </li>


            <li>
              <a
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-400
              hover:bg-gray-100
            "

              >Bunker (soon)</a
              >
            </li>
            <li>
              <a
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-400
              hover:bg-gray-100
            "

              >VIP Rank (soon)</a
              >
            </li>
            <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
            <li>
              <button
                className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "

              >Support</button
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropdownTopBar;