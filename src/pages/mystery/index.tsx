import { Button, DatePicker, Input, Radio, Select } from 'antd'
import { RangePickerProps } from 'antd/lib/date-picker'
import { IL_MYSTERY } from 'assets'
import AppIcon from 'components/icon'
import MysteryHeader from 'components/mystery/header'
import { parseThousand } from 'helpers/formatter'
import { useMystery } from 'hooks/mystery'
import moment from 'moment'

const Mistery = () => {
  const { payload, changePayload, placeOrder, isValidPayload } = useMystery()
  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < moment().endOf('day')
  }
  return (
    <div className="flex flex-col min-h-screen">
      <MysteryHeader />
      <IL_MYSTERY className="w-full h-auto mb-2" />
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
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl mb-2 font-[600]">Mystery Bento?</p>
          <p className="text-base text-primary-dark font-[600]">Rp30.000</p>
        </div>
        <div className="py-4 border-y border-pepper-normal">
          <p className="mb-3">Session</p>
          <Radio.Group
            className="w-full mb-4"
            value={payload.mealsTime}
            onChange={(e) => changePayload('mealsTime', e.target.value)}
          >
            <div className="flex gap-2 mb-3">
              <div className="w-1/2">
                <Radio value="lunch">
                  <div className="text-base">
                    <p>Lunch</p>
                    <p className="text-[10px]">Delivery Time (10.00 - 12.30)</p>
                  </div>
                </Radio>
              </div>
              <div className="w-1/2">
                <Radio value="dinner">
                  <div className="text-base">
                    <p>Dinner</p>
                    <p className="text-[10px]">Delivery Time (16.00 - 18.30)</p>
                  </div>
                </Radio>
              </div>
            </div>
          </Radio.Group>
          <p className="mb-3">Item Ordered</p>
          <div className="flex items-center gap-2 mb-3">
            <Input
              className="text-center h-[38px]"
              type="number"
              min={1}
              defaultValue={1}
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
      <div className="bg-white flex-grow min-h-[128px]" />
      <div className="fixed bottom-0 left-0 w-screen px-4 pt-4 pb-8 bg-white border-t-2 border-pepper-light">
        <div className="mb-2 flex justify-between items-center">
          <p className="text-base">Subtotal</p>
          <p className="text-xl font-[500]">Rp{parseThousand(30000 * payload.quantity * payload.duration)}</p>
        </div>
        <Button
          className="w-full h-12 rounded-lg border-0 outline-none shadow-none bg-primary-dark text-base text-white font-[600] disabled:bg-mono-light"
          onClick={placeOrder}
          disabled={!isValidPayload}
        >
          Place Order
        </Button>
      </div>
    </div>
  )
}

export default Mistery
