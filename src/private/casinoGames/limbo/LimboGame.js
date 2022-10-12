import React from "react";
import { useState } from "react";
import { betLimbo } from "../../../services/games/limboService";

function LimboGame() {

  const currentBallance = 'ballanceBRL';
  const [limboPoint, setLimboPoint] = useState(0);
  const [lastResults, setLastResults] = useState([]);
  const [bet, setBet] = useState();
  const [target, setTarget] = useState();

  function onClickBet(e) {
    e.preventDefault();

    betLimbo(bet, target, currentBallance)
      .then(response => {
        console.log(response.limboPoint);
        setLimboPoint(response.limboPoint);
        let results = {
          id: lastResults.length,
          value: response.limboPoint
        }
        setLastResults([results, ...lastResults]);
      })
      .catch(err => {
        console.error(err);
      })

  }

  return (
    <div className="grid grid-in-main bg-gray-600 h-full">
      <div className="h-screen w-full my-2">
        <div className="flex justify-center items-center">
          <div className="bg-slate-800  rounded-lg overflow:hidden mt-2">
            <div className="grid grid-cols-2 gap-0 shadow-lg">
              <div className="bg-slate-600 m-auto h-max w-auto min-w-max  p-2">
                <div className="grid grid-cols-1 grid-rows-4">
                  <div className="flex p-1 box-content bg-slate-800 rounded-xl max-h-16">
                    <button className="p-2 rounded-lg bg-slate-600 text-white hover:bg-slate-600 m-auto">Manual</button>
                    <button className="p-2 rounded-lg text-slate-400 hover:bg-slate-600 m-auto">Automatic (soon)</button>
                  </div>
                  <div className="block rounded-lg">
                    <form className="form-group mb-6">
                      <div>
                        <label className="text-slate-200 text-md p-1 font-medium form-label inline-block">Bet Amount</label><br></br>
                        <input className="
                        form-control
                        text-center
                        bg-slate-800
                        text-slate-200
                        shadow
                        w-2/3
                        h-12
                        rounded
                        transition
                        ease-in-out
                         m-0"
                          onChange={(e) => setBet(e.target.value)}></input>
                        <button className="bg-slate-700 p-2 rounded-sm shadow m-1 h-12 text-white  font-sans hover:bg-slate-500">1/2</button>
                        <button className="bg-slate-700 p-2 rounded-sm shadow m-auto h-12 text-white font-sans  hover:bg-slate-500" >Max</button>
                      </div>
                    </form>
                  </div>
                  <div className="block rounded-lg">
                    <form className="form-group mb-6">
                      <div>
                        <label className="text-slate-200 text-md p-1 font-bold form-label inline-block font-sans ">Target Multiplier</label><br></br>
                        <input className="
                        form-control
                        text-center
                        bg-slate-800
                        text-slate-200
                        shadow
                        w-full
                        h-12
                        rounded
                        transition
                        ease-in-out
                         m-0"
                          onChange={(e) => setTarget(e.target.value)}></input>
                      </div>
                    </form>
                  </div>
                  <button className="p-2 w-full rounded-lg shadow bg-green-600 text-white text-lg flex h-10 justify-center items-center hover:bg-green-400 font-semibold"
                    onClick={(e) => onClickBet(e)}
                  > Bet
                    < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>

                  </button>
                </div>
              </div>
              <div className="m-auto h-auto w-auto p-2">
                <div className="grid grid-rows-[1fr 4fr]">
                  <div className="flex">
                    {lastResults.slice(0, 5).map((result) => (
                      <div className="p-1 box-content bg-slate-700 rounded-full">
                        {result.value < target ?
                          <h1 className=" text-red-500 font-semibold">{result.value}</h1>
                          :
                          <h1 className=" text-green-500 ">{result.value}</h1>
                        }

                      </div>
                    ))}
                  </div>
                  <div className="p-10">
                    {limboPoint < target ?
                      <h1 className="text-3xl font-bold text-red-600">{limboPoint}</h1>
                      :
                      <h1 className="text-3xl font-bold text-green-500">{limboPoint}</h1>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default LimboGame;

