import dayjs from 'dayjs'
import isTodayPlugin from 'dayjs/plugin/isToday'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'

dayjs.extend(isTodayPlugin)
dayjs.extend(relativeTimePlugin)

export const COMMON_DATE_FORMAT = 'D MMM YYYY'
export const DATE_FORMAT = 'YYYY-MM-DD'
export const LONG_DATE_FORMAT = 'dddd, DD MMM YYYY'
export const COMMON_DATETIME_FORMAT = 'D MMM YYYY - HH.mm'
export const NOTIFICATION_DATETIME_FORMAT = 'DD MMM YYYY, HH:mm'
export const API_DATE_FORMAT = 'YYYY-MM-DD'
export const DOCUMENT_FORMAT = 'DD/MM/YY · HH:mm'
export const REJECT_FORMAT = 'dddd, D MMM YYYY, H:mm A'

export const formatDate = (date: dayjs.ConfigType, format = COMMON_DATE_FORMAT, parseFormat?: dayjs.OptionType) =>
  dayjs(date, parseFormat).format(format)

export const convertDate = (date: dayjs.ConfigType, parseFormat?: dayjs.OptionType) => dayjs(date, parseFormat)

export const now = () => dayjs()

export const today = () => dayjs(dayjs().format('YYYY-MM-DD'))

export const isDisbursementTimeExpired = (day: Date, time: any) => {
  if (!day) return false
  const hour = parseInt(dayjs().format('H'), 10)
  const isToday = dayjs(day).isToday()
  if (isToday && hour >= time) {
    return true
  }
  return false
}

export const getLatest = (prevDate: dayjs.ConfigType, nextDate: dayjs.ConfigType) =>
  dayjs(prevDate).isAfter(dayjs(nextDate)) ? prevDate : nextDate
