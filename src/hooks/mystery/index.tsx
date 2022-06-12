import { DATE_FORMAT } from 'helpers/datetime'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { pay } from 'services'

export const useMystery = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)
  const [payload, setPayload] = useState<any>({ quantity: 1, duration: 1 })

  const changePayload = (name: string, value: any) => {
    setPayload({ ...payload, [name]: value })
  }
  const placeOrder = async () => {
    setLoading(true)
    const mealPackage = {
      ...payload,
      type: 'mystery',
      startDate: payload.startDate.format(DATE_FORMAT),
    }
    await pay(mealPackage)
    push('/success')
    setLoading(false)
  }

  const isValidPayload = !!(payload.quantity && payload.duration && payload.startDate && payload.mealsTime)
  console.log(isValidPayload)

  return {
    loading,
    changePayload,
    payload,
    isValidPayload,
    placeOrder,
  }
}
