import React from "react";
import bv from "./../assets/imgs/bv.png";
import { useState } from 'react';



function HomeGame() {

  const [bonusOn, setBonusOn] = useState(false);

  return (
    <div className="grid grid-in-main bg-gray-600">
      <div className="p-4 mx-auto rounded box-content overflow-hidden">
        <img src={bv} alt={'bem-vindo'} className='rounded-md overflow-hidden shadow-xl'></img>
      </div>
      <div className="flex flex-col h-max justify-center items-center space-y-2 mt-4 mb-2">
        <h3 className="font-sm text-slate-100 font-mont">Re-Lançamento</h3>
        <h1 className="font-2xl text-slate-50 font-mont font-bold">16/10/2022 às 20:00</h1>
        <button onClick={() => setBonusOn(!bonusOn)} className="p-2 bg-blue-500 text-white font-mont rounded-md shadow">Ver Mais</button>
      </div>
      <div>
        {bonusOn ?
          <div>
            <div className="flex flex-col items-center justify-center mx-auto p-2 my-4">
              <h1 className="text-2xl text-white font-mont font-bold">Nova corrida de Relançamento</h1>
              <p className="text-white font-mont text-sm">Em poucos dias a nova plataforma estará on-line e quem ganha é você</p>
            </div>
            <div className="flex flex-col items-center justify-center mx-auto p-2 my-4">
              <h2 className="text-white font-mont text-md">O Clássico Limbo foi bom, mas agora terá seus acompanhantes</h2>
              <h2 className="text-white font-mont text-md">Veja Abaixo a lista de novos bônus e lançamento de jogos</h2>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400 ">Roullete Colors</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Mines</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Pathinko</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Pathinko Live</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Crown Crash</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Coin Flip</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Mais de 300 slot games</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Apostas esportivas</li>
            </div>
            <div className="flex flex-col items-center justify-center mb-10">
              <h1 className="text-2xl text-white font-mont font-bold">Você pode estar pensando "O que eu ganho com isso ?"</h1>
              <h2 className="text-xl text-white font-mont ">Muitos Bônus e dinheiro, são a sua resposta !</h2>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Corrida de Bônus valendo 1 BTC</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Bônus de Depósito</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Rodadas Grátis</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Novo Nível de Ranking</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Bônus Diário</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">Cashback semanal e mensal</li>
              <li className="text-white mt-1 font-mont list-none p-2 box-content shadow rounded bg-slate-800 hover:bg-green-400">E se você já estiver cadastrado e tiver ao menos um depósito antes do relançamento ganhará bônus em dobro</li>
            </div>
          </div>
          : null}
      </div>
    </div >
  )
}

export default HomeGame;