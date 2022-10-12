import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import createCharge from "../../services/createCharge";

const Modal = ({ onClose = () => { } }) => {

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [isDepositOn, setIsDepositOn] = useState(false);

  const [addresETH, setAddresETH] = useState('');
  const [addresBTC, setAddresBTC] = useState('');
  const [addresDOGE, setAddresDOGE] = useState('');

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") onClose();
  };

  function onClickSubmit(e) {
    e.preventDefault();

    createCharge()
      .then(response => {
        if (response) {
          setAddresETH(response.addres.eth);
          setAddresBTC(response.addres.btc);
          setAddresDOGE(response.addres.doge);
          setIsDepositOn(true);
        }
      })
      .catch(err => {
        console.error(err);
        setError(`This E-mail/NickName is already in use`);
      })
  }


  return (
    <div className="grid grid-in-main w-full h-screen shadow-white absolute justify-center items-center top-0 left-0 z-10 bg-black bg-opacity-80" id='modal' onClick={handleOutsideClick}>
      <div className="box-content p-10 w-96 h-auto bg-slate-800 text-white rounded-lg">
        <div className="justify-center items-center">
          <button className='relative flex align-top' onClick={onClose}>X</button>
          {/** Modal a partir daqui */}
          <div className="justify-center items center">
            <h1 className='text-center text-white font-bold text-lg my-2'> Deposit</h1>
            {!isDepositOn ? <div>
              <p className="text-center text-slate-500 text-md">Only deposit with the coin blockchain (Ex: send etherium on etherium blockchain) or
                your founds gonna be lost </p>
              <div className="my-3 flex justify-center items center">
                <button className="bg-green-600 w-36 h-7 rounded-lg shadow items-center hover:bg-green-400" onClick={onClickSubmit}>Deposit</button>
              </div>
            </div> : null}

            <div className="flex items-center justify-center">
              {isDepositOn ? <div className="space-y-6">

                <p className="text-center text-slate-200 text-md mt-4">Deposit on this address</p>
                <hr className="mt-2 mb-2"></hr>
                <h2 className="mt-2 mb-2 text-center font-bold">ETH:</h2><br></br>
                <span className="box-content shadow rounded bg-slate-600 p-2">{addresETH}</span><br></br>
                <br></br>
                <h2 className="mt-2 mb-2 text-center font-bold">BTC:</h2><br></br>
                <span className="box-content shadow rounded bg-slate-600 p-2">{addresBTC}</span><br></br>
                <br></br>
                <h2 className="mt-2 mb-2 text-center font-bold">DOGE:</h2><br></br>
                <span className="box-content shadow rounded bg-slate-600 p-2">{addresDOGE}</span><br></br>
                <br></br>
                <p className="text-center text-slate-400">After deposit, wait 1-3 confirmation on blockchain</p>
              </div> : null}

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


export default Modal;