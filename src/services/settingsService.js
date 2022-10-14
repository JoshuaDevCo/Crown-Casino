import axios from './BaseService';

const API_URL = process.env.REACT_APP_API_URL;

export async function getSettings() {
  const settingsUrl = `${API_URL}/settings/user`;
  const response = await axios.get(settingsUrl);

  return response.data;
}

export async function updatePassword(lastPassword, newPassword) {
  const passwordUrl = `${API_URL}/settings/password`;
  const response = await axios.post(passwordUrl, { lastPassword, newPassword });

  return response.data;
}

export async function updateRefferal(referenceCode) {
  const refferalUrl = `${API_URL}/settings/refferal`;
  const response = await axios.post(refferalUrl, { referenceCode });

  return response.data;
}