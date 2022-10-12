import axios from './BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function getBets() {
  const betsUrl = `${API_URL}/transactions/bets`;
  const response = await axios.get(betsUrl);

  return response.data;
}

export async function getDeposits() {
  const depositsUrl = `${API_URL}/transactions/deposits`;
  const response = await axios.get(depositsUrl);

  return response.data;
}

export async function getWithdraws() {
  const withdrawsUrl = `${API_URL}/transactions/withdraws`;
  const response = await axios.get(withdrawsUrl);

  return response.data;
}
