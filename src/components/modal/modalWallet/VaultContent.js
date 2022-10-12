import React from "react";
import { useState } from "react";

import VaultBallance from "./vaultTabs/VaultBallance";
import VaultDeposit from "./vaultTabs/VaultDeposit";
import VaultWithdraw from "./vaultTabs/VaultWithdraw";

function VaultContent() {

  const [index, setIndex] = useState(0);


  return (
    <div className="flex flex-col justify-center items-center w-auto p-3">
      <div className="flex justify-center items-center box-content p-2 bg-slate-800 roundedd my-1">
        <div className={`p-2 shadow rounded-md focus:shadow-xl  mx-1 cursor-pointer font-mont ${index === 0 ? 'bg-green-400' : ''}`} onClick={() => setIndex(0)}><h4>Saldo</h4></div>
        <div className={`p-2 shadow rounded-md focus:shadow-xl  mx-1 cursor-pointer font-mont ${index === 1 ? 'bg-green-400' : ''}`} onClick={() => setIndex(1)}>Depósito</div>
        <div className={`p-2 shadow rounded-md focus:shadow-xl  mx-1 cursor-pointer font-mont ${index === 2 ? 'bg-green-400' : ''}`} onClick={() => setIndex(2)}>Saque</div>
      </div>
      <div className='mt-2' hidden={index !== 0}><VaultBallance /></div>
      <div className='mt-2' hidden={index !== 1}><VaultDeposit /></div>
      <div className='mt-2' hidden={index !== 2}><VaultWithdraw /></div>
    </div>
  )
}

export default VaultContent;