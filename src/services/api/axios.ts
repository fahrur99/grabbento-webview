import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import { isOffline } from 'helpers/connection'
import { toCamelCase, toSnakeCase } from 'helpers/formatter/case'

export type AxiosMethod = 'GET' | 'POST' | 'DELETE'

export const errorInterceptor = (err: AxiosError): Promise<never> => {
  const { response } = err
  if (response) {
    if (response.status === 401) {
      window.location.href = '/403'
    } else if (response.status === 422) {
      return Promise.reject(err)
    } else if (response.status === 400) {
      return Promise.reject(err)
    } else if (response.status === 500) {
      return Promise.reject(err)
    } else if (response.status === 404) {
      return Promise.reject(err)
    } else {
      const url = response?.config?.url || ''
      if (isOffline()) {
        return Promise.reject(err)
      }
      window.location.href = '/403'
    }
  }
  return Promise.reject(err)
}

export const responseInterceptor = (response: AxiosResponse) => ({
  ...response,
  ...(response.data && { data: toCamelCase(response.data) }),
})

const instance = axios.create()
instance.interceptors.response.use(responseInterceptor, errorInterceptor)

export const axiosWrapper = (
  method: AxiosMethod,
  url: string,
  data: Record<string, any> | any = {},
  options?: AxiosRequestConfig
): AxiosPromise => {
  const config: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    method,
    url,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options && options.headers ? options.headers : {}),
      // Authorization: `Bearer ${localStorage.getItem('grabBento')}`,
      'X-Perm': 'can_get_bento',
    },
  }
  const payload = { ...data }
  if (method === 'GET') {
    Object.keys(payload).forEach((key) => {
      if (payload[key] === null || payload[key] === '') {
        delete payload[key]
      }
    })
    config.params = toSnakeCase(payload)
  } else if (!options?.headers) {
    config.data = !payload.excludeSnakeCase ? toSnakeCase(payload) : data
  } else {
    config.data = data
  }
  return instance.request(config)
}

export const defaultPost = axios.post
