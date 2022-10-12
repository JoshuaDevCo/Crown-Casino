import axios from './BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function getVault() {
  const BallanceUrl = `${API_URL}/vault/ballance`;
  const response = await axios.get(BallanceUrl);

  return response.data;
}

export async function doVaultDeposit(coin, value) {
  const depositUrl = `${API_URL}/vault/deposit`;
  const response = await axios.post(depositUrl, { coin, value });

  return response.data;
}

export async function doVaultWithdraw(coin, value) {
  const withdrawUrl = `${API_URL}/vault/withdraw`;
  const response = await axios.post(withdrawUrl, { coin, value });

  return response.data;
}

