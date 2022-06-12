import AppIcon from 'components/icon'
import { useRouter } from 'next/router'

interface Props {
  isHistory?: boolean
}

const OrderHeader = ({ isHistory }: Props) => {
  const { push } = useRouter()
  const back = () => {
    push(isHistory ? '/orders' : '/')
  }
  return (
    <div className="bg-primary-dark p-4 pt-10 flex justify-between items-center">
      <div onClick={back}>
        <AppIcon name="back" dimension={18} viewBox="0 0 10 18" />
      </div>
      <div className="text-white text-base">{isHistory ? 'History' : 'Orders'}</div>
      {isHistory ? (
        <div className="w-[18px]" />
      ) : (
        <div onClick={() => push('orders/histories')}>
          <AppIcon name="history" dimension={26} viewBox="0 0 20 26" />
        </div>
      )}
    </div>
  )
}

export default OrderHeader
