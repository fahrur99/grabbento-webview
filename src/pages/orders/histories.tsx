import { Skeleton } from 'antd'
import OrderCard from 'components/orders/card'
import OrderHeader from 'components/orders/header'
import { useOrderHistory } from 'hooks/order/history'

const OrderHistories = () => {
  const { data, thisMonth, loading } = useOrderHistory()
  console.log(thisMonth)
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <OrderHeader isHistory />
      {loading && (
        <div className="bg-white p-4 mb-2">
          <Skeleton />
        </div>
      )}
      {!!thisMonth.length && (
        <div className="bg-white p-4 mb-2">
          <p className="text-base mb-2 capitalize">This Month</p>
          {(thisMonth || []).map((order: any) => (
            <OrderCard key={order.id} data={order} />
          ))}
        </div>
      )}
      {Object.keys(data).map((key) => (
        <div key={key} className="bg-white p-4 mb-2">
          <p className="text-base mb-2 capitalize">{key}</p>
          {(data[key] || []).map((order: any) => (
            <OrderCard key={order.id} data={order} />
          ))}
        </div>
      ))}

      <div className="bg-white flex-grow" />
    </div>
  )
}

export default OrderHistories
