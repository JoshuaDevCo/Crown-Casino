import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepositButton from './depositButton';
import WithdrawButton from './withdrawButton';

function Sidebar() {

  const navigate = useNavigate();

  const token = localStorage.getItem('token')

  const isLogged = token ? true : false

  return (
    <div className='grid grid-in-nav bg-gray-700 '>
      <nav className='bg-gray-700 text-white h-full shadow-md'>
        <div className="bg-gray-800 mt-0 p-2 shadow-lg h-23 max-h-23 flex items-center justify-center">
          <button className="p-3 ml-2 text-xl text-white font-bold hover:text-blue-400" onClick={() => navigate('/')}>Casino</button>
          <a className="p-3 ml-2 text-lg text-gray-500 font-bold hover:text-gray-400">Sports (soon)</a>
        </div>
        {/** Feito */}
        <div className='mt-2'>
          <div className='mt-1 flex jutify-center items-center p-2'>
            {isLogged ? <DepositButton /> : null}
          </div>
          <div className='mt-1 mb-4 flex jutify-center items-center p-2'>
            {isLogged ? <WithdrawButton /> : null}
          </div>
          <ul className="relative mt-2">
            <li className="relative" id="sidenavEx1">
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-500 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                <span className='text-white text-lg font-bold ml-1'>Casino</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="white" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </a>
              <ul className="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                <li className="relative">
                  <a className="flex ml-1 items-center text-md font-bold py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark" onClick={() => navigate('/crash')}>
                    Crash</a>
                </li>
                <li className="relative">
                  <a href="#!" className="flex ml-1 items-center text-md font-bold py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Limbo</a>
                </li>
              </ul>
            </li>

          </ul >
        </div >
        {/** Menu DropDown item 2 */}
        < div className='mt-2' >
          <ul className="relative">
            <li className="relative" id="sidenavEx2">
              <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx2" aria-expanded="true" aria-controls="collapseSidenavEx2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="white" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg>
                <span className='text-white'>Casino</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="white" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </a>
              <ul className="relative accordion-collapse collapse" id="collapseSidenavEx2" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                <li className="relative">
                  <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Jogo original 1</a>
                </li>
                <li className="relative">
                  <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">Jogo original 2</a>
                </li>
              </ul>
            </li>

          </ul>
        </div >
      </nav >
    </div >
  )
}

export default Sidebar