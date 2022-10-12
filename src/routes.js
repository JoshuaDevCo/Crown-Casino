/** Importações Padrão */
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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


  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )

}

export default Routing;