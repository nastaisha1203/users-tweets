import axios from 'axios';
axios.defaults.baseURL = 'https://63d83e4b5a330a6ae165c9aa.mockapi.io/api/v1/';

export const fetchUsers = async () => {
  const { data } = await axios.get('/users');
  console.log(data);
  return data;
};
