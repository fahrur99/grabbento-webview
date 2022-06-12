import { callApi } from './api'

export const getMerchants = (payload: any) => {
  return callApi('POST', '/merchants', payload)
    .then((res) => res.data.data)
    .catch(() => [])
}

export const getMerchant = (id: string) => {
  return callApi('GET', `/merchants/${id}`)
    .then((res) => res.data.data)
    .catch(() => {})
}

export const getMeals = (payload: any) => {
  return callApi('POST', '/meals', payload)
    .then((res) => res.data.data)
    .catch(() => [])
}

export const getMeal = (id: string) => {
  return callApi('GET', `/meals/${id}`)
    .then((res) => res.data.data)
    .catch(() => {})
}

export const updateBasket = (payload: any) => {
  return callApi('POST', '/basket/update', payload)
    .then((res) => res.data.data)
    .catch(() => {})
}

export const getBasket = () => {
  return callApi('GET', '/basket')
    .then((res) => res.data.data)
    .catch(() => {})
}

export const pay = (payload: any) => {
  return callApi('POST', '/pay', payload)
    .then((res) => res.data.data)
    .catch(() => {})
}

export const getOrders = () => {
  return callApi('GET', '/orders')
    .then((res) => res.data.data)
    .catch(() => {})
}

export const getHistories = () => {
  return callApi('GET', '/histories')
    .then((res) => res.data.data)
    .catch(() => {})
}
