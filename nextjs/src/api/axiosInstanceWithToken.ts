import axios from 'axios';
import {
  getCookie,
  isTokenExpired,
  tokenRefresh,
} from '@/utils/manageTokenInfo';

export const axiosInstanceWithToken = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/linkbrary/v1',
});

axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstanceWithToken.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log('404 페이지로 넘어가야 함!');
    }

    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (isTokenExpired()) await tokenRefresh();

      const accessToken = getCookie('accessToken');

      error.config.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  }
);
