import React from "react";
import { useState } from "react";

import GeneralContent from "./GeneralContent";
import SecurityContent from "./SecurityContent";
import OfferContent from "./OfferContent";


function Settings() {

  const [index, setIndex] = useState(0);


  return (
    <div className="w-full h-full p-4  bg-slate-600">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-auto p-3">
          <div className="flex justify-center items-center  my-1">
            <div className={`p-2 border-solid border-2 shadow rounded-md focus:shadow-xl border-slate-500 mx-1 cursor-pointer font-mont ${index === 0 ? 'text-white font-bold bg-slate-500' : ''}`} onClick={() => setIndex(0)}><h4>Geral</h4></div>
            <div className={`p-2 border-solid border-2 shadow rounded-md focus:shadow-xl border-slate-500 mx-1 cursor-pointer font-mont ${index === 1 ? 'text-white font-bold bg-slate-500' : ''}`} onClick={() => setIndex(1)}>Segurança</div>
            <div className={`p-2 border-solid border-2 shadow rounded-md focus:shadow-xl border-slate-500 mx-1 cursor-pointer font-mont ${index === 2 ? 'text-white font-bold bg-slate-500' : ''}`} onClick={() => setIndex(2)}>Ofertas</div>
          </div>
          <div className='mt-2 p-2 box-content shadow bg-slate-700 rounded m-auto w-full h-full' hidden={index !== 0}><GeneralContent /></div>
          <div className='mt-2 p-2 box-content shadow bg-slate-700 rounded m-auto w-full h-full' hidden={index !== 1}><SecurityContent /></div>
          <div className='mt-2 p-2 box-content shadow bg-slate-700 rounded m-auto w-full h-full' hidden={index !== 2}><OfferContent /></div>
        </div>

      </div>
    </div>
  )
}

export default Settings;