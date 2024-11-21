import axios, { AxiosResponse } from "axios";
import { baseURl } from "./endpoints";
import { Product } from "../types/product";

interface Response {
  products: any;
}

const axiosClient = axios.create({
  baseURL: baseURl,
  timeout: 8000,
});

const handleResponse = (response: AxiosResponse<Response | Product[]>): Response | Product[] => {
  return response.data;
};

axiosClient.interceptors.response.use(
  (response: AxiosResponse<Response | Product[]>) => {
    const modifiedData = handleResponse(response);
    
    return {
      ...response,
      data: modifiedData, 
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
