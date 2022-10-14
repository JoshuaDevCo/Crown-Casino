import React from 'react'
import { useState } from 'react'
import { updatePassword } from '../../../services/settingsService'

function SecurityContent() {

  const [lastPassword, setLastPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    updatePassword(lastPassword, newPassword).then((response) => {
      setMessage(response.message)
    })
  }

  return (
    <div className='w-96 md:max-w-3xl min-w-max h-full flex justify-center items-center'>
      <div className='p-2 box-content bg-slate-700 rounded '>
        <div>
          <h1 className='text-slate-50 font-mont font-semibold text-lg text-center'>Segurança</h1>
        </div>
        <div className='box-content mt-2  p-2 border border-slate-400 rounded'>
          <div className='justify-between items-center flex flex-col'>
            <h1 className='text-md text-white font-mont text-left border-b-2 border-slate-500'>Senha</h1><hr></hr>
            <form>
              <div className='flex-col flex p-3 my-2 border-b-2 border-slate-600'>
                <label className="font-mont text-bold text-sm text-white text-left sm:text-md">Senha Antiga</label>
                <input onChange={(e) => setLastPassword(e.target.value)} className="border-2 text-white border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
                  type="password"></input>
              </div>
              <div className='flex-col flex p-3 my-2 border-b-2 border-slate-600'>
                <label className="font-mont text-bold text-sm text-white text-left sm:text-md">Senha Nova</label>
                <input onChange={(e) => setNewPassword(e.target.value)} className="border-2 text-white border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
                  type="password"></input>
              </div>
              <div className='flex-col flex p-3 my-2 border-b-2 border-slate-600'>
                <label className="font-mont text-bold text-sm text-white text-left sm:text-md">Confirme a nova Senha</label>
                <input onChange={(e) => setConfirmNewPassword(e.target.value)} className="border-2 text-white border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
                  type="password"></input>
              </div>
              <div className='flex justify-end '>
                <button onClick={handleSubmit} className="bg-slate-500 hover:bg-green-600 text-white font-mont font-bold text-sm rounded-md p-2 my-2 mx-2">Salvar</button>
              </div>
              <div>
                {message && <p className='text-slate-50 font-mont text-sm text-center'>{message}</p>}
              </div>
            </form>
          </div>
        </div>
        <div className='box-content mt-4  p-2 border border-slate-400 rounded'>
          <div className='justify-between items-center flex flex-col'>
            <h1 className='text-md text-white font-mont text-left border-b-2 border-slate-500'>2FA</h1><hr></hr>
            <form>
              <div className='flex-col flex p-3 my-2 border-b-2 border-slate-600 mt-3'>
                <label className="font-mont text-bold text-sm text-white text-left sm:text-md">Email para 2FA</label>
                <input className="border-2 text-white border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
                  type="texty"></input>
              </div>
              <div className='flex justify-end '>
                <button className="bg-slate-500 hover:bg-green-600 text-white font-mont font-bold text-sm rounded-md p-2 my-2 mx-2">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityContent