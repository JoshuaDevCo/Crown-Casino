import React from 'react';
import Layout from '../components/layout/Layout';
import HomeGame from './homeGames'

function Home() {

  return (
    <div>
      <Layout content={<HomeGame />} />
    </div>
  )
}

export default Home;