import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function doLogin(email, password) {

  const loginUrl = `${API_URL}/users/login`;
  const response = await axios.post(loginUrl, { email, password });

  return response.data;
}

export async function doAuth(email, AuthCode) {
  const authUrl = `${API_URL}/users/auth`;
  const response = await axios.post(authUrl, { email, AuthCode });

  return response.data;
}

export async function doLogout() {
  const logoutUrl = `${API_URL}/logout`;
  const response = await axios.post(logoutUrl, {});
  return response.data;
}




