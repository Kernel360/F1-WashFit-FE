/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

import { axiosInstance } from '@remote/api/instance.api';

/* get 요청 */
export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.get<T>(
    url,
    config as InternalAxiosRequestConfig,
  );
  return response.data;
};

/* post 요청 */
export const postRequest = async <T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.post<T>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  );
  return response.data;
};

/* delete 요청 */
export const deleteRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.delete<T>(
    url,
    config as InternalAxiosRequestConfig,
  );
  return response.data;
};

/* put 요청 */
export const putRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.put<T>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  );
  return response.data;
};

/* patch 요청 */
export const patchRequest = async <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await axiosInstance.put<T>(
    url,
    data,
    config as InternalAxiosRequestConfig,
  );
  return response.data;
};
