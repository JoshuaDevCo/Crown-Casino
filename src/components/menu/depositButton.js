import React from 'react';
import { useState } from 'react';

import Modal from '../modal/modal';


function DepositButton() {


  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className=" flex m-auto mt-3 p-2 text-slate-800 font-sans rounded-l-lg h-9 w-auto">
      <button className='bg-green-700 p-2 text-white font-sans w-56 rounded-lg h-10 hover:bg-green-500' data-bs-toggle="walletmodal" data-bs-target="#walletmodal" onClick={() => { setIsModalOpen(true) }}>Deposit</button>
      {isModalOpen ? <Modal onClose={() => setIsModalOpen(false)} /> : null}
    </div>
  )
}

export default DepositButton;

