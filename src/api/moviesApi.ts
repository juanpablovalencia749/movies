import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL, VITE_API_TOKEN } = getEnvVariables() 

export const moviesApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    'accept':'aplication/json',
    'Authorization':`Bearer ${VITE_API_TOKEN}` 
  }
})

