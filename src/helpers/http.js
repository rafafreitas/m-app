import axios from 'axios';
import { store } from '../store'

const baseURL = 'http://api.servidordetestes.pe.hu';
const timeout = 9000;

const http = () => {

  const instance = axios.create({baseURL, timeout});

  const state = store.getState();
  const token = state.auth.token || '';

  instance.interceptors.request.use((config) => {
    config.headers = { 'Content-Type': 'application/json' };
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return instance;
};

export default http;

