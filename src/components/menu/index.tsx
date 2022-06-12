import { Button, Empty, Input, Select, Skeleton } from 'antd'
import AppIcon from 'components/icon'
import { parseThousand } from 'helpers/formatter'
import BasketContext from 'hooks/basket'
import { useMenu } from 'hooks/menu'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment, useContext } from 'react'

const CATEGORIES = [
  { text: 'Under 30k', value: 'Under 30k' },
  { text: 'Healthy', value: 'Healthy' },
  { text: 'Nusantara', value: 'Nusantara' },
  { text: 'Western', value: 'Western' },
  { text: 'Oriental', value: 'Oriental' },
]

interface Props {
  isMerchant?: boolean
}

const Menu = ({ isMerchant }: Props) => {
  const { push } = useRouter()
  const { selectedTime, setSelectedTime, selectedDate, basket } = useContext(BasketContext)
  const { filter, changeFilter, loading, data } = useMenu(isMerchant)
  return (
    <div>
      <div className="px-4 mb-2">
        <div className="w-full flex bg-white h-10 items-center rounded-full overflow-hidden">
          <div className="flex items-center pl-3 pr-2 bg-primary-dark h-full text-white">
            <Select
              defaultValue="lunch"
              bordered={false}
              className="w-20 text-xs text-white custom-select focus:text-white"
              showArrow={false}
              dropdownClassName="w-[120px]"
              value={selectedTime}
              onChange={(value) => setSelectedTime(value)}
            >
              <Select.Option className="text-xs" value="lunch">
                Lunch Time
              </Select.Option>
              <Select.Option className="text-xs" value="dinner">
                Dinner Time
              </Select.Option>
            </Select>
            <AppIcon name="dropdown" dimension={6} viewBox="0 0 13 6" className="fill-white" />
          </div>
          <div className="w-full text-xs">
            <Input.Search
              placeholder="Hi Bestie, what are you searching for?"
              className="package-search"
              value={filter.search || ''}
              onChange={(e) => changeFilter('search', e.target.value)}
              enterButton={<AppIcon name="search" />}
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="inline-flex gap-2 overflow-x-auto overflow-y-hidden w-full hide-scrollbar mb-3">
          {CATEGORIES.map((category) => (
            <Button
              key={category.value}
              className={`rounded-full ${
                category.value === filter.category
                  ? 'text-white bg-primary-dark border-none'
                  : 'bg-pepper-light border border-pepper-normal text-mono-light'
              }`}
              onClick={() => changeFilter('category', filter.category === category.value ? '' : category.value)}
            >
              {category.text}
            </Button>
          ))}
        </div>
        <h2 className="text-base font-[600] mb-1">Recommended food for you</h2>
        <p className="text-xs text-mono-light mb-4">Get your daily meals without headache</p>
        {loading && <Skeleton />}
        {!loading &&
          (data.length ? (
            data.map((food: any) => (
              <div
                key={food.id}
                className="mb-4 flex gap-3"
                onClick={() =>
                  push(
                    isMerchant
                      ? `/merchant/${food.id}?time=${selectedTime}`
                      : `/food/${food.id}?time=${selectedTime}&date=${selectedDate}`
                  )
                }
              >
                <div className="relative">
                  <div className="w-[120px] h-[120px] rounded-lg overflow-hidden">
                    <Image src={food.thumbnail} width={120} height={120} alt="" layout="responsive" objectFit="cover" />
                  </div>
                  <p className="absolute left-2 top-2 bg-primary-dark rounded px-2 py-1 text-white text-xs leading-none">
                    {food.category}
                  </p>
                </div>
                {isMerchant ? (
                  <div>
                    <div className="text-xs text-mono-light mb-1 flex items-center gap-2">
                      {(food.mealsTime || []).map((mealTime: any) => (
                        <Fragment key={mealTime}>
                          <p className="capitalize">{mealTime}</p>
                          <div className="w-1 h-1 rounded bg-mono-light last:hidden" />
                        </Fragment>
                      ))}
                    </div>
                    <p className="text-base mb-2">{food.name}</p>
                    <p className="text-base font-[600]">Rp{parseThousand(food.price)}</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-mono-light mb-1">{food.merchantName}</p>
                    <p className="text-base font-[600] mb-2">{food.name}</p>
                    <p className="text-xs">Rp{parseThousand(food.price)}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ))}
      </div>
      {<div className="h-[80px]" />}
      {((!isMerchant && basket?.type === 'daily') || (isMerchant && basket?.type === 'package')) && (
        <div className="fixed bottom-8 left-0 w-screen px-4" onClick={() => push('/basket')}>
          <div className="bg-primary-dark text-base text-white rounded-lg px-5 py-4 flex justify-between items-center shadow-sm font-[600]">
            <div className="flex items-center gap-4">
              <p>Basket</p>
              <div className="w-1 h-1 rounded bg-white" />
              <p className="font-[300]">{(basket.meals || []).length} Items</p>
            </div>
            <p>Rp{parseThousand(basket.subtotal)}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
