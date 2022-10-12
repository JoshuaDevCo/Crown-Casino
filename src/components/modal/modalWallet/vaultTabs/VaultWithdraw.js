import React from 'react'
import { useState } from 'react'
import { doVaultWithdraw } from '../../../../services/getVault';

function VaultWithdraw() {

  const [value, setValue] = useState('');
  const [coin, setCoin] = useState('BRL');
  const [isWithdrawOn, setIsWithdrawOn] = useState(false);

  function handleVaultClick(e) {
    e.preventDefault();

    doVaultWithdraw(coin, value)
      .then((response) => {
        setIsWithdrawOn(true);
      })
  }

  return (
    <div>
      {!isWithdrawOn ?
        <div>
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
                  <button onClick={handleVaultClick} className='w-full bg-green-700 hover:bg-green-600 text-white font-mont font-semibold rounded-md shadow p-1 mt-3'>Avançar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        :
        <div>
          <p>Saque concluido com sucesso</p>
        </div>
      }
    </div>

  )
}

export default VaultWithdraw