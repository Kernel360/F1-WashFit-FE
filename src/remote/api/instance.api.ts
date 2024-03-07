/* eslint-disable no-param-reassign */
import { toast } from 'react-toastify';

import axios, {
  Axios, InternalAxiosRequestConfig, AxiosError, AxiosResponse,
} from 'axios';

import { getCookie } from '@utils/cookies';
import logOnDev from '@utils/logOnDev';

export const instance: Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // baseURL: '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  timeout: 3000,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    /**
         * request 직전 공통으로 진행할 작업
         */
    const token = getCookie('token') as string;
    const id = getCookie('id') as string;
    if (config && config.headers) {
      if (token) {
        config.headers.Authorization = token;
        config.headers.id = id;
      }
    }
    if (process.env.NODE_ENV === 'development') {
      const { method, url } = config;
      // eslint-disable-next-line
      logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);
    }
    return config;
  },
  (error: AxiosError | Error): Promise<AxiosError> =>
  /** * request 에러 시 작업 */
  // eslint-disable-next-line @typescript-eslint/brace-style
  { return Promise.reject(error); },
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    /**
     * http status가 20X이고, http response가 then으로 넘어가기 직전 호출
     */

    return response;
  },
  (error: AxiosError | Error): Promise<AxiosError> => {
    /**
     * http status가 20X가 아니고, http response가 catch로 넘어가기 직전 호출
     */
    if (process.env.NODE_ENV === 'development') {
      if (axios.isAxiosError(error)) {
        const { message } = error;
        const { method, url } = error.config as InternalAxiosRequestConfig;
        const { status, statusText } = error.response as AxiosResponse;
        logOnDev(
          `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`,
        );
        switch (status) {
          case 401: {
            // 로그인 필요 메시지 연결
            break;
          }
          case 403: {
            // 권한 필요 메시지 연결
            break;
          }
          case 404: {
            // 잘못된 요청 메시지 연결
            break;
          }
          case 500: {
            // 서버 문제 발생 메시지 연결
            toast.error('서버 에러 발생!!');
            break;
          }
          default: {
            // 알 수 없는 오류 발생 메시지 연결
            break;
          }
        }
      } else {
        logOnDev(`🚨 [API] | Error ${error.message}`);
      }
    }
    return Promise.reject(error);
  },
);
