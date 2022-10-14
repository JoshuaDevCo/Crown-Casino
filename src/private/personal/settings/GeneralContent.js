import React from 'react'
import { getSettings } from '../../../services/settingsService'
import { useState, useEffect } from 'react'

function GeneralContent() {

  const [settings, setSettings] = useState({})

  useEffect(() => {
    getSettings().then((response) => {
      setSettings(response)
    })
  }, [])

  return (
    <div className='w-96 md:max-w-3xl min-w-max h-full flex justify-center items-center'>
      <div className='p-2 box-content bg-slate-700 rounded '>
        <div>
          <h1 className='text-slate-50 font-mont font-semibold text-lg text-center'>Configurações Gerais</h1>
        </div>
        <div className='box-content mt-2  p-2 border border-slate-400 rounded'>
          <div className='justify-between items-center flex flex-col'>
            <h1 className='text-md text-white font-mont text-left border-b-2 border-slate-500'>E-mail</h1><hr></hr>
            <form>
              <div className='flex-col flex p-3 my-2 border-b-2 border-slate-600'>
                <label className="font-mont text-bold text-sm text-white text-left sm:text-md">E-mail</label>
                <input className="border-2 text-slate-400 border-slate-500 cursor-not-allowed rounded-md p-2 bg-slate-800 md:w-96"
                  type="text" value={settings.email} disabled></input>
              </div>
              <div className='flex justify-end '>
                <button disabled className="cursor-not-allowed bg-slate-500 hover:bg-green-600 text-white font-mont font-bold text-sm rounded-md p-2 my-2 mx-2">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralContent