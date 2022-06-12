import { useEffect, useState } from 'react'
import { getHistories } from 'services'

export const useOrderHistory = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>({})
  const [thisMonth, setThisMonth] = useState<any>([])
  const getData = async () => {
    setLoading(true)
    const res = await getHistories()
    setThisMonth(res.thisMonth || [])
    delete res.thisMonth
    setData(res)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    loading,
    thisMonth,
  }
}
