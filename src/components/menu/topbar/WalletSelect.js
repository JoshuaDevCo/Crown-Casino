import React from 'react';
import { useState, useEffect } from 'react';
import { GetBallance } from '../../../services/GetBallance';
import ModalWallet from '../../modal/modalWallet/ModalWallet';
import Modal from '../../modal/modalBase/ModalBase';

function WalletSelect() {

  const token = localStorage.getItem('token');

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState('Saldos');
  const [betBallance, setBetBallance] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [ballanceUSD, setBallanceUSD] = useState();
  const [ballanceBRL, setBallanceBRL] = useState();
  const [ballanceCAD, setBallanceCAD] = useState();
  const [ballanceEUR, setBallanceEUR] = useState();

  /**Use effect to update ballance once */
  useEffect(() => {
    GetBallance(token).then((response) => {
      setBallanceUSD(response.BallanceUSD);
      setBallanceBRL(response.BallanceBRL);
      setBallanceCAD(response.BallanceCAD);
      setBallanceEUR(response.BallanceEUR);
    });
  }, []);

  /**
   *   GetBallance(token)
    .then(response => {
      setBallanceUSD(response.BallanceUSD);
      setBallanceBRL(response.BallanceBRL);
      setBallanceCAD(response.BallanceCAD);
      setBallanceEUR(response.BallanceEUR);

    })
    .catch(err => {
      console.error(err);
    })
   */


  function handleOutsideClick(e) {
    if (e.target.id === 'outside') {
      setDropdownOpen(false);
    }
  }


  return (
    <div id='outside' className='flex items-center justify-self-center  bg-opacity-80' onClick={(e) => handleOutsideClick()}>
      <div className='relative'>
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className='p-2 bg-slate-800 border h-auto w-auto text-sm border-gray-600 rounded-l-lg'>{defaultValue}</button>
        {dropdownOpen ?
          <div className='absolute overflow-visible h-auto w-32 bg-slate-700 p-2 m-2 rounded-lg shadow flex flex-col'>
            <ul className='text-slate-50'>
              <button onClick={() => setDefaultValue(`${ballanceUSD} USD`)}>{ballanceUSD} USD</button><br></br>
              <button onClick={() => setDefaultValue(`${ballanceBRL} BRL`)}>{ballanceBRL} BRL</button><br></br>
              <button onClick={() => setDefaultValue(`${ballanceCAD} CAD`)}>{ballanceCAD} CAD</button><br></br>
              <button onClick={() => setDefaultValue(`${ballanceEUR} EUR`)}>{ballanceEUR} EUR</button><br></br>
            </ul>
          </div>
          : null}
      </div>
      <div>
        <button className='rounded-r-lg bg-blue-700 text-white shadow p-2 h-auto' onClick={() => setIsModalOpen(true)}>Carteira</button>
        {isModalOpen ? <Modal onClose={() => setIsModalOpen(false)}> <ModalWallet /> </Modal> : null}
      </div>
    </div>
  )
}

export default WalletSelect;