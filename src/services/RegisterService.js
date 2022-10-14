import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function doRegister(nickName, email, password, referenceCode) {

  const registerUrl = `${API_URL}/register`;
  const response = await axios.post(registerUrl, { nickName, email, password, referenceCode });

  return response.data;
}

