import { useEffect, useState } from 'react'
import { getMerchants } from 'services'

export const useHome = () => {
  const [merchants, setMerchants] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const res = await getMerchants({})
    setMerchants(res)
    setLoading(false)
  }
  useEffect(() => {
    getData()
  }, [])
  return {
    loading,
    merchants,
  }
}
