import { axiosInstance } from '@/api/axiosInstance';
import { JwtPayload, jwtDecode } from 'jwt-decode';

export const saveAccessToken = (accessToken: string) => {
  document.cookie = `accessToken=${accessToken}; path=/; max-age=${
    7 * 24 * 60 * 60
  }`;
};

export const saveRefreshToken = (refreshToken: string) => {
  document.cookie = `refreshToken=${refreshToken}; path=/; max-age=${
    30 * 24 * 60 * 60
  }`;
};

export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export const isTokenExpired = () => {
  const token = getCookie('accessToken');
  if (!token) {
    return true;
  }

  try {
    const decodedToken: JwtPayload = jwtDecode(token);

    const expirationTime = decodedToken.exp! * 1000;
    return Date.now() >= expirationTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

export const tokenRefresh = async () => {
  try {
    const response = await axiosInstance.post('/refresh-token', {
      refreshToken: getCookie('refreshToken'),
    });

    saveAccessToken(response.data.accessToken);
  } catch (error) {
    console.error('Token refresh failed:', error);
  }
};
