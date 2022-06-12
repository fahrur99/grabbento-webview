import { useContext, useEffect, useState } from 'react'
import { getMeals, getMerchants } from 'services'
import BasketContext from '../basket'

export const useMenu = (isMerchant = false) => {
  const { selectedDate, selectedTime } = useContext(BasketContext)
  const [data, setData] = useState<any>([])
  const [filter, setFilter] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const api = isMerchant ? getMerchants : getMeals
    const payload = { ...filter, mealsTime: selectedTime, selectedDate }
    if (payload.category === '') delete payload.category
    const res = await api(payload)
    setData(res)
    setLoading(false)
  }
  const changeFilter = (name: string, value: string) => {
    setFilter({ ...filter, [name]: value })
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, selectedTime, selectedDate])
  return {
    loading,
    data,
    filter,
    changeFilter,
  }
}
