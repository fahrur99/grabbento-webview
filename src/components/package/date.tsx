import AppIcon from 'components/icon'
import dayjs from 'dayjs'
import { DATE_FORMAT } from 'helpers/datetime'
import BasketContext from 'hooks/basket'
import React, { useContext } from 'react'

const today = dayjs()
const days = [1, 2, 3, 4, 5, 6, 7].map((day) => today.add(day, 'day'))

const Date = () => {
  const { selectedDate, setSelectedDate } = useContext(BasketContext)
  const isSelectedDate = (day: any) => day.format(DATE_FORMAT) === selectedDate
  return (
    <div className="bg-white p-4 mb-2">
      <div className="flex items-center gap-2 mt-1">
        <p className="text-base font-[600]">{today.format('dddd, DD MMM YYYY')}</p>
        <AppIcon name="dropdown" dimension={13} viewBox="0 0 13 6" className="fill-black" />
      </div>
      <div className="mt-2 inline-flex overflow-x-auto overflow-y-hidden w-full hide-scrollbar">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`w-16 h-16 rounded-lg text-center mr-2 last:mr-0 ${
              isSelectedDate(day) ? 'bg-primary-dark text-white' : 'bg-[#F4F4F4] text-[#B7B7B7]'
            }`}
            onClick={() => setSelectedDate(day.format(DATE_FORMAT))}
          >
            <p className="pt-2 text-base w-16">{day.format('ddd')}</p>
            <p className="pt-[2px] text-xl font-[600]">{day.format('D')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Date
