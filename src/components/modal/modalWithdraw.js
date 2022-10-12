import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import createWithdraw from "../../services/createWithdraw";


const ModalWithdraw = ({ onClose = () => { } }) => {


  const [error, setError] = useState("");
  const [isWithdraw, setIsWithdraw] = useState(false);

  const [addres, setAddres] = useState('');
  const [amount, setAmount] = useState('');
  const [coin, setCoin] = useState('');



  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") onClose();
  };

  function onClickSubmit(e) {
    e.preventDefault();
    setIsWithdraw(true);
  }


  function onClickWithdraw(e) {
    e.preventDefault();

    createWithdraw(addres, amount, coin)
      .then(response => {
        if (response) {
          setError("Withdraw created");
        }
      })
      .catch(err => {
        console.error(err);
        setError(`You don't have enough founds`);
      })
  }


  return (
    <div className="grid grid-in-main w-full h-screen shadow-white absolute justify-center items-center top-0 left-0 z-10 bg-black bg-opacity-80" id='modal' onClick={handleOutsideClick}>
      <div className="box-content p-10 w-96 h-auto bg-slate-800 text-white rounded-lg">
        <div className="justify-center items-center">
          <button className='relative flex align-top' onClick={onClose}>X</button>
          {/** Modal a partir daqui */}
          <div className="justify-center items center">
            <h1 className='text-center text-white font-bold text-lg my-2'>Withdraw</h1>
            {!isWithdraw ? <div>
              <p className="text-center text-slate-500 text-md">Only provide a wallet for withdraw in the same Blockchain of the crypto</p>
              <div className="my-3 flex justify-center items center">
                <button className="bg-green-600 w-36 h-7 rounded-lg shadow items-center hover:bg-green-400" onClick={onClickSubmit}>Withdraw</button>
              </div>

            </div> : null}

            <div className="flex items-center justify-center">
              {isWithdraw ? <div className="space-y-6">

                <p className="text-center text-slate-200 text-md mt-4">Double check your infos</p>
                <hr className="mt-2 mb-2"></hr>
                <form>
                  <div>
                    <label>Wallet</label>
                    <input></input>
                    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">BTC</option>
                      <option value="2">ETH</option>
                      <option value="3">USDT</option>
                    </select>
                  </div>
                </form>

                {
                  error ?
                    <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700" role="alert">{error}</div>
                    : <React.Fragment></React.Fragment>
                }
              </div> : null}

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


export default ModalWithdraw;