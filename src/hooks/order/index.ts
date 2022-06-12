import { useEffect, useState } from 'react'
import { getOrders } from 'services'

export const useOrder = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>([])
  const getData = async () => {
    setLoading(true)
    const res = await getOrders()
    setData(res)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    loading,
  }
}
