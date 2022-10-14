import React from "react";
import { useState } from "react";
import { doLogin, doAuth } from '../../../services/LoginService';
import { useNavigate } from 'react-router-dom';
import GG from './../../../assets/imgs/GG.png';

const ModalLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [twofa, setTwofa] = useState("");
  const [validationPage, setValidationPage] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function onClickLogin(e) {
    e.preventDefault();

    doLogin(email, password)
      .then(response => {
        if (response) {
          setValidationPage(true);
        }
      })
      .catch(err => {
        e.preventDefault();
        console.error(err);
        setError(`Email e/ou senha inválidos`);
      })
  }

  function onAuthClick(e) {
    e.preventDefault();

    doAuth(email, twofa)
      .then(response => {
        if (response) {
          localStorage.setItem('token', response.token);
          navigate('/');
        }
      })
      .catch(err => {
        console.error(err);
        setError(`Código de autenticação inválido`);
      })
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-0">
        <img src={GG} width={80} height={60} alt='logo'></img>
      </div>
      {validationPage ? null :
        <form>
          <div className="flex flex-col">
            <label className="font-mont text-bold text-sm sm:text-md">Email</label>
            <input
              type="email"
              className="border-2 border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-mont text-bold text-sm sm:text-md">Password</label>
            <input
              type="password"
              className="border-2 border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-700 hover:bg-green-600 text-slate-50 font-bold py-2 px-4 rounded mt-3 mx-auto w-full md:w-96" onClick={(e) => onClickLogin(e)}>
              Login
            </button>
          </div>
          {
            error ?
              <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-red-400 box-content p-2" role="alert">{error}</div>
              : <React.Fragment></React.Fragment>
          }
        </form>}

      {validationPage ?
        <div>
          <form>
            <div className="flex flex-col">
              <label className="font-mont text-bold text-sm sm:text-md">Código do E-mail:</label>
              <input
                type="text"
                className="border-2 border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
                onChange={(e) => setTwofa(e.target.value)}
              />
            </div>
            <button className="bg-green-700 hover:bg-green-600 text-slate-50 font-bold py-2 px-4 rounded mt-2 mx-auto w-full md:w-96" onClick={(e) => onAuthClick(e)}>
              Login
            </button>
          </form>
          {
            error ?
              <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-red-400 box-content p-2" role="alert">{error}</div>
              : <React.Fragment></React.Fragment>
          }
        </div>
        : null}
    </div>
  )
}

export default ModalLogin;
