import axios from 'axios';

export const config = {
  baseURL: `${process.env.NEXT_PUBLIC_URL}`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const API = axios.create(config);

export default API;
