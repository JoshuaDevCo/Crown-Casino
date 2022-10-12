import React from 'react'
import Layout from '../../../components/layout/Layout'

import TransactionsContent from './TransactionsContent'

function Transactions() {
  return (
    <Layout content={<TransactionsContent />} />
  )
}

export default Transactions