import AppIcon from 'components/icon'
import { useRouter } from 'next/router'

interface Props {
  path: string
  title: string
  subtitle: string
}

const BasketHeader = ({ path, title, subtitle }: Props) => {
  const { push } = useRouter()
  return (
    <div className="bg-white p-4 pt-10 flex justify-between text-xs">
      <div onClick={() => push(path)}>
        <AppIcon name="back" dimension={16} viewBox="0 0 10 18" className="black-stroke" />
      </div>
      <div className="flex items-center gap-[10px]">
        <p>{title}</p>
        <div className="w-1 h-1 rounded bg-black" />
        <p>{subtitle}</p>
      </div>
      <div className="w-4" />
    </div>
  )
}

export default BasketHeader
