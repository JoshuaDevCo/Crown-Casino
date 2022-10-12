import React from 'react'
import { useState, useEffect } from "react";
import { getDeposits } from '../../../../services/transactionsService';

function DepositContent() {

  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    const fetchdeposits = async () => {
      const result = await getDeposits()
      setDeposits(result);
    };
    fetchdeposits();
  }, [])

  deposits.sort(function (a, b) {
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
        <div><h3>Valor</h3></div>
        <div><h3>Moeda</h3></div>
        <div><h3>Data</h3></div>
        <div><h3>Status</h3></div>
      </div>
      {deposits.map(bet => {
        return (
          <div className='flex p-2 bg-slate-600 shadow rounded-xl my-1 mx-1 text-white box-content justify-between'>
            <div><h3>{bet.id} |</h3></div>
            <div><h3>{bet.value} |</h3></div>
            <div><h3>{bet.coin} |</h3></div>
            <div><h3>{bet.createdAt} |</h3></div>
            <div><h3 >{bet.status}</h3></div>
          </div>)

      })}
    </div>

  )
}

export default DepositContent