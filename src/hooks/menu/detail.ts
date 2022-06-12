import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { getMeal } from 'services'
import BasketContext from '../basket'

export const useMenuDetail = () => {
  const { meals, addMeal } = useContext(BasketContext)
  const { query, push } = useRouter()
  const { id, time, date } = query
  const meal = meals[id as string]
  const {} = useContext(BasketContext)
  const [data, setData] = useState<any>({})
  const [quantity, setQuantity] = useState(meal?.quantity || 1)
  const [remarks, setRemarks] = useState(meal?.remarks || '')
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const api = getMeal
    const res = await api(id as string)
    setData(res)
    setLoading(false)
  }
  const close = () => {
    push('/daily')
  }
  const addToBasket = () => {
    addMeal({ id: parseInt(id as string, 10), mealsTime: time, date, quantity, remarks })
    close()
  }
  useEffect(() => {
    id && getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const isOnBasket = !!meal?.id
  return {
    loading,
    data,
    time,
    close,
    quantity,
    setQuantity,
    remarks,
    setRemarks,
    addToBasket,
    isOnBasket,
  }
}
