import { Skeleton } from 'antd'
import OrderCard from 'components/orders/card'
import OrderHeader from 'components/orders/header'
import { useOrder } from 'hooks/order'

const Orders = () => {
  const { data, loading } = useOrder()
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <OrderHeader />
      <div className="bg-white p-4 mb-2">
        {loading && <Skeleton />}
        {data.map((order: any) => (
          <OrderCard key={order.id} data={order} />
        ))}
      </div>
      <div className="bg-white flex-grow" />
    </div>
  )
}

export default Orders
