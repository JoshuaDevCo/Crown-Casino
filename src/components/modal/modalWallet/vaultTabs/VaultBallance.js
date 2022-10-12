import React, { useState, useEffect } from 'react'
import { getVault } from '../../../../services/getVault'

function VaultBallance() {

  const [brl, setBrl] = useState(0)
  const [usd, setUsd] = useState(0)
  const [eur, setEur] = useState(0)
  const [cad, setCad] = useState(0)

  useEffect(() => {
    getVault().then((response) => {
      setBrl(response.BallanceBRL)
      setUsd(response.BallanceUSD)
      setEur(response.BallanceEUR)
      setCad(response.BallanceCAD)
    })
  }, [])

  console.log(brl, usd, eur, cad)


  return (
    <div className='flex items-center justify-center m-1 p-1'>
      <div className='flex flex-col space-y-1'>
        <h1 className='text-xl font-bold font-mont text-white'>Saldos:</h1>
        <div className='grid grid-cols-2 space-x-2'>
          <h2>BRL : </h2>
          <h2>{brl}</h2>
          <h2>USD : </h2>
          <h2>{usd}</h2>
          <h2>EUR : </h2>
          <h2>{eur}</h2>
          <h2>CAD : </h2>
          <h2>{cad}</h2>
        </div>
      </div>
    </div>
  )
}

export default VaultBallance