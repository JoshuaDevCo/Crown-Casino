import React from "react";
import bv from "./../assets/imgs/bv.png";



function HomeGame() {
  return (
    <div className="grid grid-in-main bg-gray-600">
      <div className="p-4 mx-auto rounded box-content overflow-hidden">
        <img src={bv} alt={'bem-vindo'} className='rounded-md overflow-hidden shadow-xl'></img>
      </div>
      <div>

      </div>
    </div >
  )
}

export default HomeGame;