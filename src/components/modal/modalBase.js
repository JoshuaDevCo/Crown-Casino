import React from "react";

const ModalBase = ({ onClose = () => { } }) => {

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal") onClose();
  };


  return (
    <div className="grid grid-in-main w-full h-screen shadow-white absolute justify-center items-center top-0 left-0 z-10 bg-black bg-opacity-80" id='modal' onClick={handleOutsideClick}>
      <div className="box-content p-10 w-96 h-96 bg-slate-800 text-white rounded-lg">
        <div className="justify-center items-center">
          <button className='relative flex align-top' onClick={onClose}>X</button>
          <h1 className="text-center text-xl font-serif">Wallet</h1>
          <br></br>
          <p>lorem </p>

        </div>
      </div>
    </div>
  )
}


export default ModalBase;