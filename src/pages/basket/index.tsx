import { Button, Skeleton } from 'antd'
import BasketHeader from 'components/basket/header'
import AppIcon from 'components/icon'
import { parseThousand } from 'helpers/formatter'
import BasketContext from 'hooks/basket'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const Basket = () => {
  const { push } = useRouter()
  const { loading, basket, placeOrder, loadingPay } = useContext(BasketContext)
  return (
    <div className="flex flex-col min-h-screen">
      <BasketHeader path="/" title="Basket" subtitle={basket?.type === 'daily' ? 'Daily' : 'Packages'} />
      <div className="bg-white p-4 my-2">
        <p className="font-[600] text-base mb-4">Deliver to</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <AppIcon name="location" />
            <div>
              <p className="text-base mb-1">My Home</p>
              <p className="text-mono-light">Address Detail</p>
            </div>
          </div>
          <AppIcon name="back" dimension={12} viewBox="0 0 10 18" className="black-stroke rotate-180" />
        </div>
      </div>
      <div className="bg-white p-4 mb-2">
        <div className="text-base flex justify-between items-center mb-3">
          <p className="font-[600]">Order summary</p>
          {basket.type === 'daily' && (
            <div className="cursor-pointer text-action-normal" onClick={() => push('/daily')}>
              Add Items +
            </div>
          )}
        </div>
        {loading && <Skeleton />}
        {(basket.meals || []).map((meal: any) => (
          <div key={meal.mealId || meal.id} className="mb-3 last:mb-0">
            <p className="border-b border-pepper-normal pb-2 mb-2">{meal.date}</p>
            <p className="text-xs font-[600] text-mono-light mb-2 capitalize">
              {meal.mealsTime} (Delivery Time {meal.mealsTime === 'lunch' ? '10:00 - 12:30' : '16.00 - 18.30'} )
            </p>
            <div className="mb-4 flex gap-3">
              <div className="w-[80px] h-[80px] rounded-lg overflow-hidden bg-pepper-light">
                {meal.thumbnail && <Image src={meal.thumbnail} alt="" width={80} height={80} />}
              </div>
              <div className="flex-grow flex justify-between">
                <div>
                  <p className="text-base font-[600] mb-2">
                    <span className="text-primary-dark">{meal.quantity} x </span>
                    {meal.name}
                  </p>
                  <p className="text-xs text-mono-light mb-2">{meal.merchantName}</p>
                  {basket.type === 'daily' && <p className="text-xs cursor-pointer text-action-normal">Edit Order</p>}
                </div>
                <p className="text-base">Rp{parseThousand(meal.price * meal.quantity)}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-pepper-normal pt-2">
          <div className="flex justify-between items-center mb-2 text-xs">
            <p>Subtotal</p>
            <p>Rp{parseThousand(basket.subtotal)}</p>
          </div>
          <div className="flex justify-between items-center mb-2 text-xs text-primary-dark">
            <p>Delivery Fee</p>
            <p className="text-black">
              Free <span className="line-through text-primary-dark">10.000</span>
            </p>
          </div>
          <div className="flex justify-between items-center mb-2 text-xs">
            <p>Order Fee</p>
            <p>Rp{parseThousand(basket.orderFee)}</p>
          </div>
        </div>
      </div>
      <div className="bg-white flex-grow min-h-[120px]" />
      <div className="fixed bottom-0 left-0 w-screen px-4 pt-4 pb-8 bg-white border-t-2 border-pepper-light">
        <div className="mb-2 flex justify-between items-center">
          <p className="text-base">Total</p>
          <p className="text-xl font-[500]">Rp{parseThousand(basket.total)}</p>
        </div>
        <Button
          className="w-full h-12 rounded-lg border-0 outline-none shadow-none bg-primary-dark text-base text-white font-[600]"
          loading={loadingPay}
          onClick={placeOrder}
        >
          Place Order
        </Button>
      </div>
    </div>
  )
}

export default Basket
