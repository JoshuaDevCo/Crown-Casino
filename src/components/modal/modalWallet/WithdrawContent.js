import React from 'react'
import { useState } from 'react'
import createWithdraw from '../../../services/createWithdraw';

function WithdrawContent() {

  const [value, setValue] = useState('');
  const [coin, setCoin] = useState('BRL');
  const [payment, setPayment] = useState('cripto');
  const [addres, setAddres] = useState('');
  const [isWithdrawOn, setIsWithdrawOn] = useState(false);

  console.log(value, coin, payment, addres)


  function handleWithdrawClick(e) {
    e.preventDefault();

    createWithdraw(value, coin, payment, addres)
      .then(response => {
        if (response) {
          setIsWithdrawOn(true);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className='p-2 m-2 w-full max-w-sm h-full'>
      {!isWithdrawOn ?
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
                <div>
                  <label className='font-mont text-white p-1 font-semibold'>Endereço da carteira (BUSD) :</label>
                  <input onChange={(e) => setAddres(e.target.value)} className='w-full text-slate-50 bg-slate-700 p-1 rounded-md border-2 border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent' type='text' />
                </div>
              </div>
              <div>
                <button onClick={handleWithdrawClick} className='w-full bg-green-700 hover:bg-green-600 text-white font-mont font-semibold rounded-md shadow p-1 mt-3'>Avançar</button>
              </div>
              <div>
                <p className='text-mont text-slate-500 text-sm'>*Somente rede BEP-20 ou seus fundos serão perdidos</p>
              </div>
            </div>
          </form>
        </div>
        :
        <div>
          <p className="text-center text-slate-200 text-md mt-4">Seu saque está em processamento! </p>
          <p className="text-center text-slate-400">Pode demorar até 24hs</p>
        </div>
      }
    </div >

  )
}
export default WithdrawContent;