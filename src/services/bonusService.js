import axios from './BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function getBonus() {
  const BonusUrl = `${API_URL}/bonus/get-bonus`;
  const response = await axios.get(BonusUrl);

  return response.data;
}

export async function reloadBonus(coin) {
  const BonusUrl = `${API_URL}/bonus/reload`;
  const response = await axios.post(BonusUrl, { coin });

  return response.data;
}
