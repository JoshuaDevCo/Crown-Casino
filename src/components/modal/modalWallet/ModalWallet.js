import React from "react";
import { useState } from "react";

import DepositContent from './DepositContent'
import WithdrawContent from './WithdrawContent'
import VaultContent from './VaultContent'


function ModalWallet() {

  const [index, setIndex] = useState(0);


  return (
    <div className="flex flex-col justify-center items-center w-auto p-3">
      <div className="flex justify-center items-center border-b-2 border-slate-400 my-1">
        <div className='p-2 border-solid border-2 shadow rounded-md focus:shadow-xl border-slate-500 mx-1 cursor-pointer font-mont' onClick={() => setIndex(0)}><h4>Depósito</h4></div>
        <div className='p-2 border-solid border-2 shadow rounded-md focus:shadow-xl border-slate-600 mx-1 cursor-pointer font-mont' onClick={() => setIndex(1)}>Saque</div>
        <div className='p-2 border-solid border-2 shadow rounded-md focus:shadow-xl border-slate-700 mx-1 cursor-pointer font-mont' onClick={() => setIndex(2)}>Cofre</div>
      </div>
      <div className='mt-2' hidden={index !== 0}><DepositContent /></div>
      <div className='mt-2' hidden={index !== 1}><WithdrawContent /></div>
      <div className='mt-2' hidden={index !== 2}><VaultContent /></div>
    </div>
  )
}

export default ModalWallet;