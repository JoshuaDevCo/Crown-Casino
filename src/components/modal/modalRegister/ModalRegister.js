import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { doRegister } from '../../../services/RegisterService';
import { useNavigate } from "react-router-dom"
import GG from '../../../assets/imgs/GG.png';

const ModalRegister = () => {

  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const formik = useFormik({
    initialValues: {
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      referenceCode: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("O nickname é obrigatório"),
      email: Yup.string().email("Email inválido").required("O email é obrigatório"),
      password: Yup.string().required("A senha é obrigatória").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Sua senha não é forte  o suficiente"
      ),
      passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null], "As senhas não são iguais"),
      referenceCode: Yup.string()
    }),
  });



  function onClickSubmit(e) {
    e.preventDefault();

    const nickName = formik.values.nickname;
    const email = formik.values.email;
    const password = formik.values.password;
    const referenceCode = formik.values.referenceCode;

    doRegister(nickName, email, password, referenceCode)
      .then(response => {
        if (response) {
          setSuccess('Cadastro realizado com sucesso!');
          navigate('/')
        }
      })
      .catch(err => {
        console.error(err);
        setError(`Esse usuário já existe`);
      })
  }

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div className="mb-0">
        <div className="mb-0">
          <img src={GG} width={80} height={60} alt='logo'></img>
        </div>
        <h1 className="font-mont font-semibold text-slate-50">Registe-se</h1><br />
      </div>
      <div className="">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mt-2">
            <label className="font-mont text-bold text-sm sm:text-md" htmlFor="name">NickName *</label>
            <input
              className="border-2 border-slate-500 rounded-md p-2 bg-slate-800 md:w-96"
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Qual o seu Nick?"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.nickName}
            />
            {formik.touched.nickname && formik.errors.nickname ? <div className="text-red-600 font-bold font-mont mt-2 shadow rounded bg-red-400 box-content p-2">{formik.errors.nickname}</div> : null}
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-mont text-bold text-sm sm:text-md" htmlFor="name">E-mail *</label>
            <input
              className="border-2 border-slate-500 rounded-md p-2 bg-slate-800"
              type="email"
              name="email"
              id="email"
              placeholder="Qual o seu E-mail?"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-red-400 box-content p-2">{formik.errors.email}</div> : null}
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-mont text-bold text-sm sm:text-md" htmlFor="name">Senha *</label>
            <input
              className="border-2 border-slate-500 rounded-md p-2 bg-slate-800"
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-red-400 box-content p-2">{formik.errors.password}</div> : null}
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-mont text-bold text-sm sm:text-md" htmlFor="name">Confirme sua senha *</label>
            <input
              className="border-2 border-slate-500 rounded-md p-2 bg-slate-800"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="*******"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.passwordConfirm}
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-red-400 box-content p-2">{formik.errors.passwordConfirm}</div> : null}
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-mont text-bold text-sm sm:text-md" htmlFor="name">Código de Referência</label>
            <input
              className="border-2 border-slate-500 rounded-md p-2 bg-slate-800"
              type="text"
              name="referenceCode"
              id="referenceCode"
              placeholder="referenceCode"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.referenceCode}
            />
            {formik.touched.referenceCode && formik.errors.referenceCode ? <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-red-400 box-content p-2">{formik.errors.passwordConfirm}</div> : null}
          </div>
          <div className="items-center justify-center">
            <button className="bg-green-700 hover:bg-green-600 text-slate-50 font-bold py-2 px-4 rounded mt-2 mx-auto w-full md:w-96" type="submit" onClick={(e) => onClickSubmit(e)}>Registrar</button>
          </div>
          {
            error ?
              <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-red-400 box-content p-2" role="alert">{error}</div>
              : <React.Fragment></React.Fragment>
          }
          {
            success ? <div className="text-slate-800 font-semibold text-sm font-mont mt-2 shadow rounded bg-green-400 box-content p-2" role="alert">{success}</div> : <React.Fragment></React.Fragment>
          }
        </form>
      </div>
    </div>
  )
}

export default ModalRegister;