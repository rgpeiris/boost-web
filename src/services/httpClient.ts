import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

/**
 * Common config
 */
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 10000;

/**
 * Create an Instance
 */
const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

/**
 * Interceptor for requests
 * @param request
 */
const requestInterceptor = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // console.log(request);
  return request;
};

/**
 * Interceptor for responses
 * @param response
 */
const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  // console.log(response);
  return response;
};

/**
 * Interceptor to catch all response errors
 * @param error
 */
const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  // console.error(error.message, error.response);
  return Promise.reject(error);
};

httpClient.interceptors.request.use(requestInterceptor);
httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
