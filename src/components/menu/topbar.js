import React from "react";
import { useNavigate } from "react-router-dom"
import WalletButton from "./walletButton";
import DropdownTopBar from "./dropdownTopBar";
import GG from '../../assets/imgs/GG.png';

function Topbar() {


  const navigate = useNavigate();


  const token = localStorage.getItem('token')

  const isLogged = token ? true : false



  return (
    <div className="grid grid-in-header ">
      <nav className=" w-full py-3 bg-gray-800 text-gray-200 shadow-lg h-23 max-h-25 mb-0" >
        <div className="flex px-6 justify-between  ">
          <div className="flex justify-center items-center mt-2">
            <img className='cursor-pointer' src={GG} width={60} height={60} alt='GG Logo' onClick={() => navigate('/')} />
          </div>
          <div>
            {isLogged ? <WalletButton /> : null}
          </div>

          {!isLogged ?
            <div className="mt-3">
              <button className="text-white p-2 rounded-2xl font-bold  shadow hover:text-green-400" onClick={() => navigate('/login')} >Login</button>
              <button className="text-sm text-white p-3 rounded-xl font-bold ml-1 bg-blue-600 shadow-md shadow-blue-400 hover:bg-blue-800 mr-2" onClick={() => navigate('/register')}>Sing Up</button>
            </div>
            :
            <div className="flex">
              <DropdownTopBar />
            </div>}

        </div>
      </nav>
    </div>
  )
}

export default Topbar;