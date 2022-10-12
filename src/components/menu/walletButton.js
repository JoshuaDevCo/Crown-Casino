import React from 'react';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { GetBallance } from '../../services/GetBallance';
import { TbCurrencyReal } from 'react-icons/tb';
import { IoLogoUsd } from 'react-icons/io5';



function WalletButton() {

  const token = localStorage.getItem('token');

  const [currentBallance, setCurrentBallance] = useState();

  const [ballanceUSD, setBallanceUSD] = useState();
  const [ballanceBRL, setBallanceBRL] = useState();
  const [ballanceCAD, setBallanceCAD] = useState();
  const [ballanceEUR, setBallanceEUR] = useState();



  GetBallance(token)
    .then(response => {
      setBallanceUSD(response.BallanceUSD);
      setBallanceBRL(response.BallanceBRL);
      setBallanceCAD(response.BallanceCAD);
      setBallanceEUR(response.BallanceEUR);

    })
    .catch(err => {
      console.error(err);
    })

  const handleBallance = (e) => {
    setCurrentBallance(e.value);
    localStorage.setItem('currentBallance', currentBallance);
  }

  const options = [
    { value: 'ballanceUSD', label: <div className='flex text-bold justify-center items-center'>{ballanceUSD}<br></br> <IoLogoUsd /> </div> },
    { value: 'ballanceBRL', label: <div className='flex text-bold justify-center items-center'>{ballanceBRL} <br></br> <TbCurrencyReal /> </div> },
    { value: 'ballanceCAD', label: <div className='flex text-bold justify-center items-center'>{ballanceCAD} <br></br> CAD </div> },
    { value: 'ballanceEUR', label: <div className='flex text-bold justify-center items-center'>{ballanceEUR} <br></br> EUR </div> },
    { value: 'convert', label: <div className='flex'><button>Convert to USD</button></div> }
  ];



  return (
    <div className=" flex m-auto mt-3 p-2 text-slate-800 font-sans rounded-l-lg h-9 w-100 min-w-100">
      <Select options={options} onChange={(e) => handleBallance(e)} />
    </div>
  )
}

export default WalletButton;

