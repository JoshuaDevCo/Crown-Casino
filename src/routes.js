/** Importações Padrão */
import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ballanceContext from './context/ballanceContext';

/** Importações das rotas */
import App from "./App";
import Home from "./public/Home";
import PrivateRoutes from "./PrivateRoutes";

import SettingsPage from "./private/personal/settings/SettingsPage";
import Security from "./private/personal/security";
import Transactions from "./private/personal/transactions/Transactions";

import Crash from "./private/casinoGames/crash/crash";
import Limbo from "./private/casinoGames/limbo/Limbo";



function Routing() {
  const [ballance, setBallance] = useState('10000')

  return (
    <BrowserRouter>
      <ballanceContext.Provider value={{ ballance, setBallance }}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='settings' element={<SettingsPage />} />
            <Route path='security' element={<Security />} />
            <Route path='crash' element={<Crash />} />
            <Route path='limbo' element={<Limbo />} />
            <Route path='transactions' element={<Transactions />} />

          </Route>
          <Route path='/' element={<Home />} exact />
        </Routes>
      </ballanceContext.Provider>
    </BrowserRouter >

  )

}

export default Routing;