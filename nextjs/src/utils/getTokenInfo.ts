import { axiosInstance } from '@/api/axiosInstance';
import { jwtDecode } from 'jwt-decode';

export const getToken = () => {
  return localStorage.getItem('accessToken');
};

export const isTokenExpired = () => {
  const token = getToken();
  if (!token) {
    return true;
  }

  try {
    const decodedToken = jwtDecode(token);

    const expirationTime = decodedToken.exp * 1000;
    return Date.now() >= expirationTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

export const tokenRefresh = async () => {
  try {
    const response = await axiosInstance.post('/refresh-token', {
      refreshToken: localStorage.getItem('refreshToken'),
    });

    localStorage.setItem('accessToken', response.data.accessToken);
  } catch (error) {
    console.error('Token refresh failed:', error);
  }
};
