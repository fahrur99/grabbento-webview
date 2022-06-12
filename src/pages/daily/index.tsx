import Date from 'components/package/date'
import Menu from 'components/menu'
import Header from 'components/package/header'
import type { NextPage } from 'next'

const Daily: NextPage = () => {
  return (
    <div className="w-screen">
      <Header />
      <Date />
      <Menu />
    </div>
  )
}

export default Daily
