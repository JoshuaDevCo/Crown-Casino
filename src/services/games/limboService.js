import axios from '../BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function betLimbo(bet, target, currentBallance) {
  const BetUrl = `${API_URL}/limbo/bet`;
  const response = await axios.post(BetUrl, { bet: bet, target: target, currentBallance: currentBallance });

  return response.data;
}

