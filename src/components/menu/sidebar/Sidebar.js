import React from "react";
import { useNavigate } from "react-router-dom";


function Sidebar() {

  const navigate = useNavigate();

  const token = localStorage.getItem('token')

  const isLogged = token ? true : false

  return (
    <div className="bg-gray-700 flex flex-col items-center ">
      <nav className="w-full">
        <ul className="flex w-full p-2 flex-col justify-center items-center">
          <li className="px-1 w-full flex text-slate-300 font-mont font-medium text-sm border-b-2 border-slate-600">
            Cassino
          </li>
          <li className="py-1 justify-center items-center w-full">
            <button
              className="w-full  rounded-lg hover:bg-slate-700 hover:shadow-lg text-white  p-2 ease-in-out duration-75"
              onClick={() => navigate('/crash')}>
              ⭐ Favoritos
            </button>
          </li>
          <li className="py-2 justify-center items-center w-full">
            <button
              className="w-full  rounded-lg hover:bg-slate-700 hover:shadow-lg text-white  p-2 ease-in-out duration-75"
              onClick={() => navigate('/crash')}>
              🔥 Crash
            </button>
          </li>
          <li className="py-2 justify-center items-center w-full">
            <button
              className="w-full  rounded-lg hover:bg-slate-700 hover:shadow-lg text-white  p-2 ease-in-out duration-75"
              onClick={() => navigate('/limbo')}>
              🎯 Limbo
            </button>
          </li>
          <li className="px-1 w-full flex text-slate-300 font-mont font-medium text-sm border-b-2 border-slate-600">
            Cassino
          </li>
          <li className="py-1 justify-center items-center w-full">
            <button
              className="w-full  rounded-lg hover:bg-slate-700 hover:shadow-lg text-white  p-2 ease-in-out duration-75"
              onClick={() => navigate('/crash')}>
              ⭐ Favoritos
            </button>
          </li>
          <li className="py-2 justify-center items-center w-full">
            <button
              className="w-full  rounded-lg hover:bg-slate-700 hover:shadow-lg text-white  p-2 ease-in-out duration-75"
              onClick={() => navigate('/crash')}>
              🔥Crash
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;