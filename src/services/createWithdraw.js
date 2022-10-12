import axios from './BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function createWithdraw(value, coin, payment, addres) {
  const withdrawUrl = `${API_URL}/wallet/withdraw`;
  const response = await axios.post(withdrawUrl, { value, coin, payment, addres });

  return response.data;
}


export default createWithdraw;