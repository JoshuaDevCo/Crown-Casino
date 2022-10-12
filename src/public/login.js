import React from "react";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { doLogin } from "../services/LoginService";
import GG from './../assets/imgs/GG.png'

function Login() {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  function onClickSubmit(e) {
    e.preventDefault();

    doLogin(email, password)
      .then(response => {
        if (response) {
          console.log(response);
        }
      })
      .catch(err => {
        console.error(err);
        setError(`Invalid user and/or password!`);
      })
  }


  return (
    <main className="flex bg-slate-800 h-screen w-screen items-center justify-center ">
      <div className="box-content  p-6 rounded-lg shadow-sm shadow-grey-200 bg-white w-96">
        <form className="content-center">
          <Link to='/' className="flex items-center justify-center font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
            </svg> Back to HomePage</Link>
          <img src={GG} alt="logo" className="w-14 h-14 mx-auto my-2 bg-black rounded-full p-2" />
          <h1 className="text-center m-5 font-bold text-grey-800 text-lg">Login</h1>
          <div className="form-group mb-6">
            <label htmlFor="labelEmail" className="form-label inline-block mt-2 mb-2 text-gray-700 text-md font-semibold">Your Best E-mail<br></br></label>
            <input type='text' className="form-control
              block
              w-full
              px-3
              py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
              placeholder="johndoe@company.com" onChange={(e) => setEmail(e.target.value)}></input>
            <label htmlFor="labelPassword" className="form-label inline-block mt-2 mb-2 text-gray-700 text-md font-semibold">Password<br></br></label>
            <input type='password' className="form-control
              block
              w-full
              px-3
              py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password"
              placeholder="********" onChange={(e) => setPassword(e.target.value)}></input>
            <input type="checkbox"
              className="form-check-input appearance-none h-4 w-4 mt-3 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck1" />
            <label className="form-check-label inline-block text-gray-800 text-sm mt-3" htmlFor="exampleCheck1">Keep me logged</label>
            <button type="submit" className="
      mt-4
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      w-full
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" onClick={(e) => onClickSubmit(e)}>Login</button>
          </div>
          {
            error ?
              <div className="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700" role="alert">{error}</div>
              : <React.Fragment></React.Fragment>
          }
        </form>
      </div >
    </main >

  )
}

export default Login;
