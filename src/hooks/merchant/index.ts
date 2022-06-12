import { DATE_FORMAT } from 'helpers/datetime'
import BasketContext from 'hooks/basket'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { getMerchant } from 'services'

export const useMerchantDetail = () => {
  const { addPackage } = useContext(BasketContext)
  const { query, push } = useRouter()
  const { id, time } = query
  const [data, setData] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [payload, setPayload] = useState<any>({ quantity: 1, duration: 1 })

  const getData = async () => {
    setLoading(true)
    const api = getMerchant
    const res = await api(id as string)
    setData(res)
    setLoading(false)
  }
  const back = () => {
    push('/package')
  }
  const choose = () => {
    push(`/merchant/${id}/checkout?time=${time}`)
  }
  const backToMerchantPath = `/merchant/${id}?time=${time}`
  const changePayload = (name: string, value: any) => {
    setPayload({ ...payload, [name]: value })
  }
  const checkout = async () => {
    const mealPackage = {
      ...payload,
      type: 'package',
      mealsTime: time,
      merchantId: id,
      startDate: payload.startDate.format(DATE_FORMAT),
    }
    await addPackage(mealPackage)
  }

  useEffect(() => {
    id && getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const isValidPayload = payload.quantity && payload.duration && payload.startDate

  return {
    loading,
    data,
    back,
    choose,
    time,
    backToMerchantPath,
    changePayload,
    payload,
    isValidPayload,
    checkout,
  }
}
