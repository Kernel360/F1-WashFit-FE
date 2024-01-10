import axios, { Axios } from 'axios';

export const axiosInstance: Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  timeout: 3000,
});
