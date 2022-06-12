import Explore from 'components/home/explore'
import Header from 'components/home/header'
import Merchant from 'components/home/merchant'
import Product from 'components/home/product'
import { useHome } from 'hooks/home'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { merchants, loading } = useHome()
  return (
    <div className="w-screen">
      <Header />
      <Product />
      <Explore />
      <Merchant merchants={merchants} loading={loading} />
    </div>
  )
}

export default Home
