import axios from './BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function createCharge(value, coin, payment) {
  const depositUrl = `${API_URL}/wallet/deposit`;
  const response = await axios.post(depositUrl, { value, coin, payment });

  return response.data;
}


export default createCharge;