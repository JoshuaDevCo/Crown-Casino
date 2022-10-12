import React from 'react';

const Modal = ({ id = 'modal', onClose = () => { }, children }) => {

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  }

  return (
    <div id={id} className='w-full h-screen absolute top-0 left-0 z-10 bg-black bg-opacity-80 flex justify-center items-center' onClick={handleOutsideClick}>
      <div className='bg-slate-800 w-auto h-auto text-slate-100 font-mont rounded-lg p-4 pt-0'>
        <button className='bg-transparent outline-none h-16 w-16 border-none cursor-pointer text-white' onClick={onClose}>X</button>
        <div className='mt-0'>{children}</div>
      </div>
    </div>
  );
}

export default Modal;