import React from 'react'
import { useState } from 'react'
import createCharge from '../../../services/createCharge';

function DepositContent() {

  const [value, setValue] = useState('');
  const [coin, setCoin] = useState('BRL');
  const [payment, setPayment] = useState('cripto');
  const [isDepositOn, setIsDepositOn] = useState(false);


  const [addresETH, setAddresETH] = useState('');
  const [addresBTC, setAddresBTC] = useState('');
  const [addresDOGE, setAddresDOGE] = useState('');

  function handleDepositClick(e) {
    e.preventDefault();

    createCharge(value, coin, payment)
      .then(response => {
        if (response) {
          setAddresETH(response.addresses.ethereum);
          setAddresBTC(response.addresses.bitcoin);
          setAddresDOGE(response.addresses.dogecoin);
          setIsDepositOn(true);
        }
      })
      .catch(err => {
        console.error(err);
      })
  }

  return (
    <div className='p-2 m-2 w-full h-full'>
      {!isDepositOn ?
        <div>
          <form>
            <div className='flex flex-col'>
              <div>
                <label className='font-mont text-white p-1 font-semibold'>Valor:</label>
                <input onChange={(e) => setValue(e.target.value)} className='w-full text-slate-50 bg-slate-700 p-1 rounded-md border-2 border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent' type='number' />
              </div>
              <div>
                <label className='font-mont text-white p-1 font-semibold'>Moeda</label>
                <select onChange={(e) => setCoin(e.target.value)} className='w-full text-slate-50 bg-slate-700 p-1 rounded-md border-2 border-slate-500 focus:outline-none focus:ring-2 '>
                  <option>BRL</option>
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div>
                <label className='font-mont text-white p-1 font-semibold'>Método de Pagamento</label>
                <select onChange={(e) => setPayment(e.target.value)} className='w-full text-slate-50 bg-slate-700 p-1 rounded-md border-2 border-slate-500 focus:outline-none focus:ring-2 '>
                  <option>Criptomoeda</option>
                </select>
              </div>
              <div>
                <button onClick={handleDepositClick} className='w-full bg-green-700 hover:bg-green-600 text-white font-mont font-semibold rounded-md shadow p-1 mt-3'>Avançar</button>
              </div>
            </div>
          </form>
        </div>
        :
        <div>
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
        </div>
      }
    </div >

  )
}
export default DepositContent