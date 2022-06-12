import { IL_OrderDaily, IL_OrderMystery, IL_OrderPackage } from 'assets'
import dayjs from 'dayjs'
import { parseThousand } from 'helpers/formatter'

interface Props {
  data: any
}

const OrderCard = ({ data }: Props) => {
  const date = dayjs(data?.orderDate).format('D MMM YYYY')
  const ils: any = {
    daily: <IL_OrderDaily />,
    package: <IL_OrderPackage />,
    mysterious: <IL_OrderMystery />,
  }
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-pepper-normal">{ils[data.type]}</div>
        <div className="text-xs">
          <p className="text-base mb-1">{data.title || 'Mystery Box'}</p>
          <p>{data.subtitle || `Mystery - ${data.duration} Days`}</p>
          <p className="text-mono-light mt-1">{date}</p>
        </div>
      </div>
      <div>
        <p className="text-base mb-2">Rp{parseThousand(data.amount)}</p>
        <p className="text-xs text-mono-light">+400 points</p>
      </div>
    </div>
  )
}

export default OrderCard
