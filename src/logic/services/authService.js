import api from '../utils/axiosConfig';

const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', {
      login: email,
      pass: password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');

    const { data } = await api.post('/auth/refresh', { refreshToken });

    localStorage.setItem('accessToken', data.access_token);
    localStorage.setItem('refreshToken', data.refresh_token);
  } catch (err) {
    return err;
  }
};

export default refreshToken;

const logout = async () => {
  try {
    await api.post('/auth/logout');
    return true;
  } catch (err) {
    return err;
  }
};

export { login, logout };
