import React from 'react'
import { useState, useEffect } from "react";
import { getBets } from '../../../../services/transactionsService';

function BetsContent() {

  const [bets, setBets] = useState([]);

  useEffect(() => {
    const fetchBets = async () => {
      const result = await getBets()
      setBets(result);
    };
    fetchBets();
  }, [])

  bets.sort(function (a, b) {
    if (a.id > b.id) {
      return -1;
    } else {
      return true;
    }
  })

  return (
    <div className='space-x-2 space-y-2'>
      <h1 className='text-white'>Apostas</h1>
      <div className='flex p-2 bg-slate-600 space-x-10 md:space-x-24 text-white box-content justify-between rounded'>
        <div><h3>Id</h3></div>
        <div><h3>Jogo</h3></div>
        <div><h3>Aposta</h3></div>
        <div><h3>Multiplicador</h3></div>
        <div><h3>Resultado</h3></div>
      </div>
      {bets.map(bet => {
        return (
          <div className='flex p-2 bg-slate-600 shadow rounded-xl my-1 mx-1 text-white box-content justify-between'>
            <div><h3>{bet.id} |</h3></div>
            <div><h3>{bet.gameName} |</h3></div>
            <div><h3>{bet.betAmount} |</h3></div>
            <div><h3>{bet.betMultiplier} |</h3></div>
            <div><h3 className={`${bet.betResult < bet.betMultiplier ? 'text-red-500' : 'text-green-500'}`}>{bet.betResult}</h3></div>
          </div>)

      })}
    </div>

  )
}

export default BetsContent