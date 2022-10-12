import React from "react";
import Layout from "./components/layout/Layout";
import HomeGame from './public/homeGames'

function App() {

  return (
    <div>
      <Layout content={<HomeGame />} />
    </div>
  )
};

export default App;