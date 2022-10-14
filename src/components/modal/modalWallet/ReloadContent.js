import React from 'react'
import { useState, useEffect } from 'react'
import { getBonus, reloadBonus } from '../../../services/bonusService'


function ReloadContent() {

  const [value, setValue] = useState('');
  const [coin, setCoin] = useState('BRL');
  const [isDepositOn, setIsDepositOn] = useState(false);

  useEffect(() => {
    getBonus()
      .then((response) => {
        setValue(response.value)
      })
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    reloadBonus(coin)
      .then((response) => {
        console.log(response);
        setIsDepositOn(true);
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
                <input disabled value={value} className='w-full text-slate-50 bg-slate-700 p-1 rounded-md border-2 border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent' type='number' />
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
                <button onClicl={handleSubmit} className='w-full bg-green-700 hover:bg-green-600 text-white font-mont font-semibold rounded-md shadow p-1 mt-3'>Avançar</button>
              </div>
            </div>
          </form>
        </div>
        :
        <p>Recarga Efetuada com sucesso</p>
      }
    </div >

  )
}
export default ReloadContent