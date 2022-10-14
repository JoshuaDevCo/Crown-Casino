import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import DropdownTopBar from "./../dropdownTopBar";
import GG from '../../../assets/imgs/GG.png';
import Modal from '../../modal/modalBase/ModalBase';
import ModalLogin from '../../modal/modalLogin/ModalLogin'
import ModalRegister from '../../modal/modalRegister/ModalRegister'
import WalletSelect from "./WalletSelect";

import Sidebar from "../sidebar/Sidebar";


function Topbar() {


  const navigate = useNavigate();

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = localStorage.getItem('token')

  const isLogged = token ? true : false



  return (
    <div className="">
      <nav className=" w-full py-3 bg-slate-800 text-gray-200 shadow-lg mb-0" >
        <div className="flex px-6 justify-between  ">
          <div className="flex justify-center items-center mt-2">
            <div className="text-xl md:hidden mr-8">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </button>
            </div>
            <img className='cursor-pointer' src={GG} width={80} height={60} alt='GG Logo' onClick={() => navigate('/')} />
          </div>
          <div>
            {isLogged ? <WalletSelect /> : null}
          </div>

          {!isLogged ?
            <div className="mt-3">
              <button className="font-mont text-white p-2 font-bold hover:text-green-400" onClick={() => setIsModalLoginOpen(true)} >Login</button>
              {isModalLoginOpen ? <Modal onClose={() => setIsModalLoginOpen(false)}> <ModalLogin /> </Modal> : null}
              <button className="font-mont text-sm text-white p-2 rounded-lg font-bold ml-1 bg-blue-600 shadow-md hover:bg-blue-800 mr-2" onClick={() => setIsModalRegisterOpen(true)}>Cadastre-se</button>
              {isModalRegisterOpen ? <Modal onClose={() => setIsModalRegisterOpen(false)}> <ModalRegister /> </Modal> : null}
            </div>
            :
            <div className="flex">
              <DropdownTopBar />

            </div>}

        </div>
      </nav>
      {isMenuOpen ? <Sidebar /> : null}
    </div>
  )
}

export default Topbar;