import { Button, DatePicker, Input, Select } from 'antd'
import { RangePickerProps } from 'antd/lib/date-picker'
import BasketHeader from 'components/basket/header'
import AppIcon from 'components/icon'
import dayjs from 'dayjs'
import { parseThousand } from 'helpers/formatter'
import { useMerchantDetail } from 'hooks/merchant'
import moment from 'moment'

const Checkout = () => {
  const { backToMerchantPath, data, time, payload, changePayload, isValidPayload, checkout } = useMerchantDetail()
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < moment().endOf('day')
  }
  return (
    <div className="flex flex-col min-h-screen">
      <BasketHeader path={backToMerchantPath} title="Checkout" subtitle="Packages" />
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
      <div className="bg-white p-4 mb-2 text-base">
        <p className="font-[600] mb-2">Detail Order</p>
        <p className="text-xl mb-2 capitalize">
          {data.name} - {time}
        </p>
        <p className="mb-4">@ Rp{parseThousand(data.price)}</p>
        <div className="py-4 border-y border-pepper-normal">
          <p className="mb-3">Item Ordered</p>
          <div className="flex items-center gap-2 mb-3">
            <Input
              className="text-center h-[38px]"
              type="number"
              min={1}
              value={payload.quantity}
              onChange={(e) => changePayload('quantity', parseInt(e.target.value, 10))}
            />
            <div onClick={() => changePayload('quantity', payload.quantity <= 0 ? 0 : (payload.quantity || 0) - 1)}>
              <AppIcon name="minus" viewBox="0 0 48 48" dimension={38} />
            </div>
            <div onClick={() => changePayload('quantity', (payload.quantity || 0) + 1)}>
              <AppIcon name="plus" viewBox="0 0 48 48" dimension={38} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-grow">
              <p className="mb-3">Date Start</p>
              <DatePicker
                className="w-full h-[38px]"
                disabledDate={disabledDate}
                value={payload.startDate}
                onChange={(value) => changePayload('startDate', value)}
              />
            </div>
            <div className="w-1/3">
              <p className="mb-3">Duration</p>
              <Select
                className="w-full"
                value={payload.duration}
                onChange={(value) => changePayload('duration', value)}
              >
                <Select.Option value={1}>1 Day</Select.Option>
                <Select.Option value={2}>2 Days</Select.Option>
                <Select.Option value={3}>3 Days</Select.Option>
                <Select.Option value={4}>4 Days</Select.Option>
                <Select.Option value={5}>5 Days</Select.Option>
                <Select.Option value={6}>6 Days</Select.Option>
                <Select.Option value={7}>7 Days</Select.Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-grow min-h-[120px]" />
      <div className="fixed bottom-0 left-0 w-screen px-4 pt-4 pb-8 bg-white border-t-2 border-pepper-light">
        <div className="mb-2 flex justify-between items-center">
          <p className="text-base">Subtotal</p>
          <p className="text-xl font-[500]">Rp{parseThousand(data.price * payload.quantity * payload.duration)}</p>
        </div>
        <Button
          className="w-full h-12 rounded-lg border-0 outline-none shadow-none bg-primary-dark text-base text-white font-[600] disabled:bg-pepper-normal"
          disabled={!isValidPayload}
          onClick={checkout}
        >
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Checkout
