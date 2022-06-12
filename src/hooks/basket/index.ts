import dayjs from 'dayjs'
import { DATE_FORMAT } from 'helpers/datetime'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { getBasket, pay, updateBasket } from 'services'

export const useBasket = () => {
  const { push } = useRouter()
  const [selectedDate, setSelectedDate] = useState(dayjs().add(1, 'day').format(DATE_FORMAT))
  const [selectedTime, setSelectedTime] = useState('lunch')
  const [basket, setBasket] = useState<any>({})
  const [meals, setMeals] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [loadingPay, setLoadingPay] = useState(false)
  const addMeal = async (meal: any) => {
    setLoading(true)
    const newMeals = { ...meals, [meal.id]: meal }
    if (meal.quantity <= 0) delete newMeals[meal.id]
    const res = await updateBasket({
      type: 'daily',
      selectedDate: meal.date,
      meals: Object.values(newMeals).map((meal: any) => ({ ...meal, menuId: meal.id })),
    })
    setBasket(res)
    setMeals(newMeals)
    setLoading(false)
  }
  const addPackage = async (mealPackage: any) => {
    setLoading(true)
    const res = await updateBasket(mealPackage)
    push('/basket')
    setBasket(res)
    setMeals((res.meals || []).reduce((prev: any, curr: any) => ({ ...prev, [curr.menuId || curr.id]: curr }), {}))
    setLoading(false)
  }
  const getData = async () => {
    setLoading(true)
    const res = await getBasket()
    setBasket(res)
    setMeals((res.meals || []).reduce((prev: any, curr: any) => ({ ...prev, [curr.menuId || curr.id]: curr }), {}))
    setLoading(false)
  }

  const placeOrder = async () => {
    setLoadingPay(true)
    await pay({ type: 'normal' })
    push('/success')
    setLoadingPay(false)
  }
  useEffect(() => {
    getData()
  }, [])
  return {
    basket,
    setSelectedDate,
    selectedDate,
    selectedTime,
    setSelectedTime,
    addMeal,
    meals,
    addPackage,
    loading,
    loadingPay,
    placeOrder,
  }
}

export const BasketContext = createContext<any>({})

export default BasketContext
