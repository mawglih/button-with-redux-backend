import axios from 'axios';


export const createCounterApi = async (url, arg) => {
  console.log('api', url, arg);
  const response = await axios.get(`${url}/${arg}`);
  const data = response.data;
  return data;
}

export const incrementCounterApi = async (url, id) => {
  const response = await axios.patch(`${url}/${id}`);
  const data = response.data;
  return data;
}

export const resetCounterApi = async (url, id) => {
  const response = await axios.delete(`${url}/${id}`);
  const data = response.data;
  return data;
}