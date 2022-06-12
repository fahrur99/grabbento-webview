import Menu from 'components/menu'
import Header from 'components/package/header'
import type { NextPage } from 'next'

const Package: NextPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <Menu isMerchant />
    </div>
  )
}

export default Package
