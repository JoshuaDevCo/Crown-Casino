import axios from './BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function GetBallance(token) {
  const BallanceUrl = `${API_URL}/wallet/ballance`;
  const response = await axios.get(BallanceUrl);

  return response.data;
}



