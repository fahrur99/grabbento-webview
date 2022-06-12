import { ReactNode } from 'react'
import BasketContext, { useBasket } from '.'

interface Props {
  children: ReactNode
}

const BasketProvider = ({ children }: Props) => {
  const basket = useBasket()
  return <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>
}

export default BasketProvider
