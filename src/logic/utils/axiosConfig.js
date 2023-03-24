import axios from 'axios';
import refreshToken from '../services/authService';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      return refreshToken().then(() => {
        originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        return instance(originalRequest);
      });
    }
    return Promise.reject(error);
  },
);

export default instance;
